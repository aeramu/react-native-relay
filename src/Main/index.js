import {createBottomTabNavigator} from 'react-navigation-tabs'

import QnA from './QnA'
import Profile from './Profile'

const Main = createBottomTabNavigator({
  QnA: QnA,
  Profile: Profile,
})

export default Main
