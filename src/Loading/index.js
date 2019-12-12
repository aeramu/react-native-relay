import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'

export default class Loading extends React.Component{
  componentDidMount(){
    this.authentication()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }
  async authentication(){
    token = await AsyncStorage.getItem('token')
    if (token){
      this.props.navigation.navigate('Main')
    } else {
      this.props.navigation.navigate('Authentication');
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
