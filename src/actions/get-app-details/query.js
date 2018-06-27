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
      screenshots {
        path_thumbnail
        path_full
      }
      header_image
      movies {
        path_thumbnail
      }
    }
  }`;
  return queryGraphQL({ query, serialize });
}
