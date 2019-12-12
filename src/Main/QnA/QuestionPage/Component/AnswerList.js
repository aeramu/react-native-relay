import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import {createFragmentContainer, graphql} from 'react-relay'

import Answer from './Answer'


export default class AnswerList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.answerList}
          renderItem={({ item }) => <Answer answer={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
