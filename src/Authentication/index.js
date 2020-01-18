import {createSwitchNavigator} from 'react-navigation'

import Register from './Register'
import Login from './Login'

const Authentication = createSwitchNavigator({
  Login: Login,
  Register: Register,
})

export default Authentication
