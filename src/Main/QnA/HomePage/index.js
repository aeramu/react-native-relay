import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import {graphql, QueryRenderer} from 'react-relay'

import QuestionList from './Component/QuestionList'
import AskQuestion from './Component/AskQuestion'

export default class HomePage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={global.env}
        query={graphql`
          query HomePageQuery {
            ...QuestionList_questionList
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <Text>Error!</Text>;
          }
          if (!props) {
            return <Text>Loading...</Text>;
          }
          return (
            <ScrollView style={styles.container}>
              <AskQuestion navigation={this.props.navigation}/>
              <QuestionList questionList={props} navigation={this.props.navigation}/>
            </ScrollView>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
});
