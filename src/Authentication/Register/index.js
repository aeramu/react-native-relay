import React from 'react'
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import commit from './registerAccount'

export default class Register extends React.Component{
  state={
    message: ""
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="username"
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          onChangeText={(text) => this.setState({ password: text })}
        />
        <Button
          title="Register"
          onPress={()=>this.onPressButton()}
        />
        <Text>{this.state.message}</Text>
        <Text onPress={()=>this.props.navigation.navigate('Login')}>Login</Text>
      </View>
    )
  }
  async onPressButton(){
    const token = await commit(
      this.state.email,
      this.state.username,
      this.state.password
    )
    if (token.indexOf('token') == -1){
      this.setState({message: token})
    } else{
      global.token = token
      await AsyncStorage.setItem('token',token)
      this.props.navigation.navigate('Main')
    }
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
