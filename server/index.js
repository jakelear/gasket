const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')
const baseURL = `https://api.steampowered.com`
const resolvers = {
  Query: {
    applist: async (parent, args) => {
      const { filter } = args;
      const results = await fetch(`${baseURL}/ISteamApps/GetAppList/v2`);
      const json = await results.json();
      json.applist.apps = json.applist.apps.filter((app) => app.name.toLowerCase().includes(filter.toLowerCase()))
      return json.applist;
    },
    appNews: (parent, args)  => {
      const { appid } = args;
      return fetch(`${baseURL}/ISteamNews/GetNewsForApp/v2?appid=${appid}`)
        .then(res => res.json())
        .then(res => res.appnews);
    },
    appDetails: (parent, args)  => {
      const { appid } = args;
      return fetch(`https://store.steampowered.com/api/appdetails/?appids=${appid}`)
        .then(res => res.json())
        .then((res) => {
          res[appid].data.movies.map((movie, index) => {
            res[appid].data.movies[index] = {
              id: movie.id,
              name: movie.name,
              thumbnail: movie.thumbnail,
              small: movie.webm[480],
              large: movie.webm['max']
            }
          });
          return res[appid].data;
        });
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './server/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))