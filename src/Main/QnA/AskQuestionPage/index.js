import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AskQuestionForm from './Component/AskQuestionForm'

export default class AskQuestionPage extends Component {
  render() {
    return (
      <AskQuestionForm navigation={this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
