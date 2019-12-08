import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import QuestionList from './Component/QuestionList'
import AskQuestion from './Component/AskQuestion'

export default class HomePage extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <AskQuestion navigation={this.props.navigation}/>
        <QuestionList navigation={this.props.navigation}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
});
