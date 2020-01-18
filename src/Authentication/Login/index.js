import React from 'react'
import {
  View,
  StyleSheet,
  AsyncStorage,
} from 'react-native'
import {
  Button,
  Input,
  Text
} from 'react-native-elements'

import commit from './loginAccount'

export default class Login extends React.Component{
  state = {
    message: ""
  }
  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{
          flex: 4,
          justifyContent: 'flex-end',
          alignItems: 'stretch',
          paddingHorizontal: 30,
        }}>
          <Input
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholder="Username or email"
            autoCapitalize="none"
            onChangeText={(text) => this.setState({ email: text , username: text})}
          />
          <Input
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
          />
          <Button
            containerStyle={styles.buttonContainer}
            title="Login"
            onPress={()=>this.onPressButton()}
          />
        </View>
        <Text>{this.state.message}</Text>
        <View style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{color: 'grey'}}>Don't have an account? </Text>
          <Text
            style={{fontWeight: "bold"}}
            onPress={()=>this.props.navigation.navigate('Register')}
          >Register</Text>
        </View>
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
        global.token = token
        await AsyncStorage.setItem('token',token)
        this.props.navigation.navigate('Main')
      }
    })
  }
}

const styles = StyleSheet.create({
  inputContainer:{
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#d3d3d3',
    overflow: 'hidden',
    marginVertical: 5,
  },
  input:{
    fontSize: 15,
    paddingHorizontal:10,
    paddingVertical: 8,
  },
  buttonContainer:{
    borderRadius: 100,
    overflow: 'hidden',
    marginTop: 25,
    marginHorizontal: 10
  }
});
