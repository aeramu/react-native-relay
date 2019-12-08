import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import {graphql, QueryRenderer} from 'react-relay'
import Question from './Question'

class QuestionList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.questionList}
          renderItem={({ item }) => <Question question={item} navigation={this.props.navigation}/>}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

export default class QuestionListQuery extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={global.env}
        query={graphql`
          query QuestionListQuery {
            questionList {
              id
              ...Question_question
            }
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
            <QuestionList questionList={props.questionList} navigation={this.props.navigation}/>
          );
        }}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
});
