import {createStackNavigator} from 'react-navigation-stack'

import HomePage from './HomePage'
import AskQuestionPage from './AskQuestionPage'
import QuestionPage from './QuestionPage'

const QnA = createStackNavigator({
  HomePage: HomePage,
  AskQuestionPage: AskQuestionPage,
  QuestionPage: QuestionPage
})

export default QnA
