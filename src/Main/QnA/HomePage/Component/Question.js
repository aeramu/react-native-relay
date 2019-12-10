import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {graphql, createFragmentContainer} from 'react-relay'

class Question extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={()=>this.onPress()}>
        <Text>{this.props.question.author.username}</Text>
        <Text>{this.props.question.title}</Text>
      </TouchableOpacity>
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
