import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'

import Loading from './Loading'
import Authentication from './Authentication'
import Main from './Main'

const AppNavigator = createSwitchNavigator({
  Loading: Loading,
  Authentication: Authentication,
  Main: Main
})

export default createAppContainer(AppNavigator)
