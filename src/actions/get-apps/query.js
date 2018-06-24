import queryGraphQL from '../../api';

const APP_QUERY = `
  {
    applist {
      apps {
        name
        appid
      }
    }
  }
`;

function serialize (data) {
  return data.applist.apps.map((app) => {
    return {
      ...app
    };
  });
}

export default async function getApps () {
  const query = APP_QUERY;
  return queryGraphQL({ query, serialize });
}
