import {createStackNavigator} from 'react-navigation-stack'

import Register from './Register'
import Login from './Login'

const Authentication = createStackNavigator({
  Register: Register,
  Login: Login,
})

export default Authentication
