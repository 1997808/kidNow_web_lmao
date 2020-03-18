import { Platform } from 'react-native'

import IndexScreen from '../screens/IndexScreen'
import ProfileScreen from '../screens/ProfileScreen'
import PaymentScreen from '../screens/PaymentScreen'
import NoteScreen from '../screens/NoteScreen'
import MessageScreen from '../screens/MessageScreen'
import CalendarScreen from '../screens/CalendarScreen'

import NotificationScreen from '../screens/DrawerScreen/NotificationScreen'
import SettingScreen from '../screens/DrawerScreen/SettingScreen'
import PasswordScreen from '../screens/DrawerScreen/PasswordScreen'

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

const IndexDrawerNavigator = createDrawerNavigator({
  Index: IndexTabNavigator,
  Notification: NotificationScreen,
  Setting: SettingScreen,
  Password: PasswordScreen,
  Payment: PaymentScreen,
  Profile: ProfileScreen,
})

// const IndexNavigator = createStackNavigator({
//   IndexDraw: IndexDrawerNavigator,
//   IndexNav: IndexTabNavigator,
// })

export default createAppContainer(IndexDrawerNavigator)