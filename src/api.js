import 'whatwg-fetch';

const API_URI = 'http://localhost:4000/';

export default async function queryGraphQL ({ query, serialize, variables }) {
  const body = JSON.stringify({ query, variables });
  const method = 'post';
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  };

  const response = await fetch(API_URI, { body, headers, method });
  const { data, errors } = await response.json();

  if (errors) {
    return { error: errors.map((error) => error.message) };
  }

  return { data: serialize(data) };
}
