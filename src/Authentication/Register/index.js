import React from 'react'
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  AsyncStorage,
  Image
} from 'react-native'
import {
  Button,
  Input,
  Text
} from 'react-native-elements'

import commit from './registerAccount'

export default class Register extends React.Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <KeyboardAvoidingView style={{
          flex: 5,
          justifyContent: 'flex-end',
          alignItems: 'stretch',
          paddingHorizontal: 30,
        }} behavior="padding">
          <Image
            source={require('../../../logo.png')}
            style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 30}}
          />
          <Input
            placeholder="Username"
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            autoCapitalize="none"
            errorMessage={this.state.usernameErrorMessage}
            onChangeText={(text) => this.validateUsername(text)}
          />
          <Input
            placeholder="Email"
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            errorMessage={this.state.emailErrorMessage}
            onChangeText={(text) => this.validateEmail(text)}
          />
          <Input
            placeholder="Password"
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            secureTextEntry={true}
            errorMessage={this.state.passwordErrorMessage}
            onChangeText={(text) => this.validatePassword(text)}
          />
          <Input
            placeholder="Confirm password"
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            secureTextEntry={true}
            errorMessage={this.state.confirmPasswordErrorMessage}
            onChangeText={(text) => this.validateConfirmPassword(text)}
          />
          <Button
            title="Register"
            containerStyle={styles.buttonContainer}
            onPress={()=> this.isValid()}
          />
          <View style={{ height: 15 }} />
        </KeyboardAvoidingView>
        <View style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{color: 'grey'}}>Already have an account? </Text>
          <Text
            style={{fontWeight: "bold"}}
            onPress={()=>this.props.navigation.navigate('Login')}
          >Login</Text>
        </View>
      </View>
    )
  }

  state={
    usernameErrorMessage:"",
    emailErrorMessage:"",
    passwordErrorMessage:"",
    confirmPasswordErrorMessage:"",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  validateUsername(text){
    this.setState({username: text})
    if (text.match("^[a-z0-9_]+$")){
      this.setState({usernameErrorMessage:""})
    }
    else{
      this.setState({usernameErrorMessage:"UCan only contain lowercase letter or number"})
    }
  }
  validateEmail(text){
    this.setState({email: text.toLowerCase()})
    if(/\S+@\S+\.\S+/.test(text)){
      this.setState({emailErrorMessage:""})
    }
    else{
      this.setState({emailErrorMessage:"Invalid email"})
    }
  }
  validatePassword(text){
    this.setState({password: text})
    if(text.length<8){
      this.setState({passwordErrorMessage:"Password length at least 8 characters"})
    }
    else{
      this.setState({passwordErrorMessage:""})
    }
  }
  validateConfirmPassword(text){
    this.setState({confirmPassword: text})
    if(this.state.password==text){
      this.setState({confirmPasswordErrorMessage:""})
    }
    else{
      this.setState({confirmPasswordErrorMessage:"Password doesn't match"})
    }
  }

  isValid(){
    if(this.state.username == ""){
      this.setState({usernameErrorMessage:"This field can't be empty"})
    }
    else if(this.state.email == ""){
      this.setState({emailErrorMessage:"This field can't be empty"})
    }
    else if(this.state.password == ""){
      this.setState({passwordErrorMessage:"This field can't be empty"})
    }
    else if(this.state.confirmPassword == ""){
      this.setState({confirmPasswordErrorMessage:"This field can't be empty"})
    }
    else if(this.state.password != this.state.confirmPassword){
      this.setState({confirmPasswordErrorMessage:"Password doesn't match"})
    }
    else if(this.state.usernameErrorMessage == "" &&
      this.state.emailErrorMessage == "" &&
      this.state.passwordErrorMessage == "" &&
      this.state.confirmPasswordErrorMessage == ""){
        this.onPressButton()
    }
  }

  async onPressButton(){
    const token = await commit(
      this.state.email,
      this.state.username,
      this.state.password
    )
    if (token.indexOf('token') == -1){
      if (token.indexOf('email') != -1){
        this.setState({emailErrorMessage: token})
      }
      else if (token.indexOf('username') != -1){
        this.setState({usernameErrorMessage: token})
      }
      else{
        this.setState({confirmPasswordErrorMessage: token})
      }
    } else{
      global.token = token
      await AsyncStorage.setItem('token',token)
      this.props.navigation.navigate('Main')
    }
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
