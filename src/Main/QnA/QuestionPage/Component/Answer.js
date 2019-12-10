import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {graphql, createFragmentContainer} from 'react-relay'

class Answer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.answer.author.username}</Text>
        <Text>{this.props.answer.body}</Text>
      </View>
    );
  }
}

export default createFragmentContainer(
  Answer,
  {
    answer: graphql `
      fragment Answer_answer on Answer{
        author{
          username
        }
        body
      }
    `
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
