import {graphql, commitMutation} from 'react-relay'

const mutation = graphql`
  mutation AskQuestionMutationMutation($title: String!, $body: String!){
    askQuestion(title: $title, body: $body){
      id
      title
      body
    }
  }
`

function commit(title, body){
  const variables = {
    title: title,
    body: body,
  }
  return new Promise((resolve, reject) => {
    commitMutation(global.env, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        resolve(response.askQuestion);
      },
      onError: err => reject(err),
    });
  });
}

export default commit
