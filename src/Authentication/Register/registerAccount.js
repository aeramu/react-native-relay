import {graphql, commitMutation} from 'react-relay'

const mutation = graphql`
  mutation registerAccountMutation($email: String!, $username: String!, $password: String!){
    registerAccount(email: $email, username: $username, password: $password)
  }
`

function commit(email, username, password){
  const variables = {
    email: email,
    username: username,
    password: password,
  }
  return new Promise((resolve, reject) => {
    commitMutation(global.env, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        resolve(response.registerAccount);
      },
      onError: err => reject(err),
    });
  });
}

export default commit
