import { Platform } from 'react-native'

import IndexScreen from '../screens/IndexScreen'
import ProfileScreen from '../screens/ProfileScreen'
import PaymentScreen from '../screens/PaymentScreen'
import NoteScreen from '../screens/NoteScreen'
import MessageScreen from '../screens/MessageScreen'
import CalendarScreen from '../screens/CalendarScreen'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

// const IndexNavigator = createStackNavigator({
//   Index: IndexScreen,
//   Profile: ProfileScreen,
// }, {
// defaultNavigationOptions: {
//   headerStyle: {
//     backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//   },
//   headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
// }
// })

const IndexTabNavigator = createBottomTabNavigator({
  Index: IndexScreen,
  Note: NoteScreen,
  Calendar: CalendarScreen,
  Message: MessageScreen,
  Payment: PaymentScreen,
})

const IndexNavigator = createAppContainer({
  IndexNav: IndexTabNavigator
})

export default createAppContainer(IndexTabNavigator)