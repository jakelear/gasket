const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')
const fuzzy = require('fuzzy');

const baseURL = `https://api.steampowered.com`
const resolvers = {
  Query: {
    applist: async (parent, args) => {
      const matchThreshold = 20;
      const { filter } = args;
      const results = await fetch(`${baseURL}/ISteamApps/GetAppList/v2`);
      const json = await results.json();

      const filtered = fuzzy
        .filter(filter, json.applist.apps, { extract: app => app.name })
        .map(function(el) {
          return {
            'name': el.string,
            'appid': el.original.appid,
            'score': el.score
          };
        })
        .filter(app => app.score > matchThreshold);

      console.log(filtered);
      return {
        apps: filtered
      };
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
        .then(res => res[appid].data);
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './server/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))