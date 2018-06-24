import queryGraphQL from '../../api';

function serialize (data) {
  return data.applist.apps.map((app) => {
    return {
      ...app
    };
  });
}

export default async function getApps (filter) {
  console.log(filter);
  const query = `
  {
    applist(filter: "${filter}") {
      apps {
        name
        appid
      }
    }
  }`;
  return queryGraphQL({ query, serialize });
}
