import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import {graphql, createFragmentContainer} from 'react-relay'
import Question from './Question'

class QuestionList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.questionList.questionList.edges}
          renderItem={({ item }) => <Question question={item.node} navigation={this.props.navigation}/>}
        />
      </View>
    )
  }
}

export default createFragmentContainer(
  QuestionList,
  {
    questionList: graphql`
      fragment QuestionList_questionList on Query{
        questionList(first:5){
          edges{
            node{
              ...Question_question
            }
          }
        }
      }
    `
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
});
