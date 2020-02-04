import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  ListItem,
  Text
} from 'react-native-elements'
import {graphql, createFragmentContainer} from 'react-relay'

class Question extends Component {
  render() {
    return (
      <ListItem
        onPress={()=>this.onPress()}
        title={this.props.question.title}
        subtitle={"asked by "+this.props.question.author.username}
      />
    );
  }

  onPress(){
    this.props.navigation.navigate('QuestionPage',{id: this.props.question.id})
  }
}

export default createFragmentContainer(
  Question,
  {
    question: graphql`
      # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
      fragment Question_question on Question {
        id
        title
        author{
          username
        }
      }
    `
  },

)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 1
  },
});
