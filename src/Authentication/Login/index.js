import React from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
} from 'react-native'

import commit from './loginAccount'

export default class Login extends React.Component{
  state = {
    message: ""
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={(text) => this.setState({ email: text , username: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          onChangeText={(text) => this.setState({ password: text })}
        />
        <Button
          title="Login"
          onPress={()=>this.onPressButton()}
        />
        <Text>{this.state.message}</Text>
      </View>
    )
  }
  onPressButton(){
    this.setState(()=>{
      if (this.state.email.indexOf('@') == -1){
        return {email: ''}
      } else {
        return {username: ''}
      }
    }, async ()=>{
      token = await commit(
        this.state.email,
        this.state.username,
        this.state.password
      )
      if (token.indexOf('token') == -1){
        this.setState({message: token})
      } else{
        this.props.navigation.navigate('Main')
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    justifyContent: 'center'
  },
  input:{
    margin: 10,
    padding: 10,
    borderWidth: 1
  }
});
