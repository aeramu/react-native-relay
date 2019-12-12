import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {createFragmentContainer, graphql} from 'react-relay'

class QuestionDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.question.author.username}</Text>
        <Text>{this.props.question.title}</Text>
        <Text>{this.props.question.body}</Text>
      </View>
    );
  }
}

export default createFragmentContainer(
  QuestionDetail,
  {
    question: graphql`
      fragment QuestionDetail_question on Question{
        title
        body
        author{
          id
          username
        }
      }
    `
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
