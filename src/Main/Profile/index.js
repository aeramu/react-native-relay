import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={()=>this.onButtonPress()}
          title="Log Out"
        />
      </View>
    );
  }
  async onButtonPress(){
    await AsyncStorage.removeItem('token')
    this.props.navigation.navigate('Authentication')
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
});
