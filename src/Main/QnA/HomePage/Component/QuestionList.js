import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import {graphql, createFragmentContainer} from 'react-relay'
import Question from './Question'

export default class QuestionList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.questionList}
          renderItem={({ item }) => <Question question={item} navigation={this.props.navigation}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
});
