const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')
const baseURL = `https://api.steampowered.com`
const resolvers = {
  Query: {
    applist: () => {
      return fetch(`${baseURL}/IStoreService/GetAppList/v1?key=1B26CE8190640F0AB775F048DCD40922`)
        .then(res => res.json())
        .then(res => res.response)
    },
    appNews: (parent, args)  => {
      const { appid } = args;
      return fetch(`${baseURL}/ISteamNews/GetNewsForApp/v2?appid=${appid}`)
        .then(res => res.json())
        .then(res => res.appnews);
    },
    appDetails: (parent, args)  => {
      const { appid } = args;
      return fetch(`https://store.steampowered.com/api/appdetails/?appids?appids=${appid}`)
        .then(res => res.json())
        .then(res => res.appnews);
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './server/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))