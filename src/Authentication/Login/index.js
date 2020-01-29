import React from 'react'
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  AsyncStorage,
  Image,
} from 'react-native'
import {
  Button,
  Input,
  Text
} from 'react-native-elements'

import commit from './loginAccount'

export default class Login extends React.Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <KeyboardAvoidingView style={{
          flex: 4,
          justifyContent: 'flex-end',
          alignItems: 'stretch',
          paddingHorizontal: 30,
        }}>
          <Image
            source={require('../../../logo.png')}
            style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 30}}
          />
          <Input
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholder="Username or email"
            autoCapitalize="none"
            errorMessage={this.state.usernameErrorMessage}
            onChangeText={(text) => this.setState({
              email: text,
              username: text,
              usernameErrorMessage:""
            })}
          />
          <Input
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            errorMessage={this.state.passwordErrorMessage}
            onChangeText={(text) => this.setState({ password: text, passwordErrorMessage:"" })}
          />
          <Button
            containerStyle={styles.buttonContainer}
            title="Login"
            onPress={()=>this.isValid()}
          />
          <View style={{ height: 30 }} />
        </KeyboardAvoidingView>
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

  state={
    usernameErrorMessage:"",
    passwordErrorMessage:"",
    username: "",
    password: "",
  }

  isValid(){
    if(this.state.username == "" && this.state.email == ""){
      this.setState({usernameErrorMessage:"This field can't be empty"})
    }
    else if(this.state.password == ""){
      this.setState({passwordErrorMessage:"This field can't be empty"})
    }
    else if(this.state.usernameErrorMessage == "" &&
      this.state.passwordErrorMessage == ""){
        this.onPressButton()
    }
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
        if (token.indexOf('username') != -1){
          this.setState({usernameErrorMessage: token})
        }
        else if (token.indexOf('Password') != -1){
          this.setState({passwordErrorMessage: token})
        }
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
