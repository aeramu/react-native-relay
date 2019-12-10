import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {graphql, QueryRenderer} from 'react-relay'

import QuestionDetail from './Component/QuestionDetail'
import AnswerList from './Component/AnswerList'
import AnswerQuestionForm from './Component/AnswerQuestionForm'

export default class QuestionPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={global.env}
        query={graphql`
          query QuestionPageQuery($id: ID!) {
            question(id: $id) {
              ...QuestionDetail_question
              answers{
                ...Answer_answer
              }
            }
          }
        `}
        variables={{id: this.props.navigation.getParam('id','default')}}
        render={({error, props}) => {
          if (error) {
            return <Text>Error!</Text>;
          }
          if (!props) {
            return <Text>Loading...</Text>;
          }
          return (
            <View style={styles.container}>
              <QuestionDetail question={props.question}/>
              <AnswerList answerList={props.question.answers}/>
              <AnswerQuestionForm questionID={this.props.navigation.getParam('id','default')}/>
            </View>
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
    alignItems: 'stretch',
  },
});
