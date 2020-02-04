import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

export default class AskQuestion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={()=>this.onPressButton()}
          title="Ask Question"
        />
      </View>
    );
  }

  onPressButton(){
    this.props.navigation.navigate('AskQuestionPage')
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
});
