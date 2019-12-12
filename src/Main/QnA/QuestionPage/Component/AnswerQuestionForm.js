import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import {graphql, commitMutation} from 'react-relay'

export default class AnswerQuestionForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Answer'
          onChangeText={(text)=>this.setState({body: text})}
        />
        <Button
          onPress={()=>this.onButtonPress()}
          title="AnswerQuestion"
        />
      </View>
    );
  }

  async onButtonPress(){
    console.log(this.props.questionID)
    console.log(this.state.body)
    response = await commit(this.props.questionID,this.state.body)
    console.log(response)
  }
}


const mutation = graphql`
  mutation AnswerQuestionFormMutation($questionID: ID!, $body: String!){
    answerQuestion(questionID: $questionID, body: $body){
      id
      body
    }
  }
`

function commit(questionID, body){
  const variables = {
    questionID: questionID,
    body: body,
  }
  return new Promise((resolve, reject) => {
    commitMutation(global.env, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        resolve(response.answerQuestion);
      },
      onError: err => reject(err),
    });
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
