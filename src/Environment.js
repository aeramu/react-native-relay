import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery = async (operation, variables, cacheConfig, uploadables) => {
  return fetch('https://mlexv5g8td.execute-api.ap-southeast-1.amazonaws.com/development/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'token': global.token,
    }, // Add authentication and other headers here
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then(response => {
    return response.json();
  });
};

const env = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

global.env = env;
