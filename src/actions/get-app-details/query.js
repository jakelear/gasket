import queryGraphQL from '../../api';

function serialize (data) {
  return data.appDetails
}

export default async function getAppDetails (id) {
  const query = `
  {
    appDetails(appid: "${id}") {
      name
      detailed_description
      categories {
        description
      }
      genres {
        description
      }
    }
  }`;
  return queryGraphQL({ query, serialize });
}
