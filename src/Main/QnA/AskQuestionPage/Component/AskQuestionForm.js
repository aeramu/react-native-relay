import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';
import commit from './AskQuestionMutation'

export default class AskQuestionForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Title'
          onChangeText={(text)=>this.setState({title:text})}
        />
        <TextInput
          style={styles.input}
          placeholder='Body'
          onChangeText={(text)=>this.setState({body:text})}
        />
        <Button
          onPress={()=>this.onButtonPress()}
          title="Ask Question"
        />
      </View>
    );
  }

  async onButtonPress(){
    token = await commit(
      this.state.title,
      this.state.body
    )
    console.log(token)
    this.props.navigation.navigate('HomePage')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  input:{
    margin: 10,
    padding: 10,
    borderWidth: 1
  }
});
