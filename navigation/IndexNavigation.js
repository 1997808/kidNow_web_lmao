import React from 'react'
import { View, Text, StyleSheet, Image, Platform, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import IndexScreen from '../screens/IndexScreen'
import ProfileScreen from '../screens/ProfileScreen'
import PaymentScreen from '../screens/PaymentScreen'
import NoteScreen from '../screens/NoteScreen'
import MessageScreen from '../screens/MessageScreen'
import CalendarScreen from '../screens/CalendarScreen'

import NotificationScreen from '../screens/DrawerScreen/NotificationScreen'
import SettingScreen from '../screens/DrawerScreen/SettingScreen'
import PasswordScreen from '../screens/DrawerScreen/PasswordScreen'

import { createAppContainer, SafeAreaView } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import Color from '../constants/Color'

const IndexTabNavigator = createBottomTabNavigator({
  Index: {
    screen: IndexScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Ionicons name={'md-home'} size={23} color={tintColor} />;
      },
    },
  },

  Note: {
    screen: NoteScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Ionicons name={'md-list-box'} size={23} color={tintColor} />;
      },
    },
  },

  Calendar: {
    screen: CalendarScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Ionicons name={'md-calendar'} size={23} color={tintColor} />;
      },
    },
  },

  Message: {
    screen: MessageScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
<<<<<<< HEAD
        return <Ionicons name={'md-text'} size={23} color={tintColor} />;
=======
        return <Ionicons name={'md-calendar'} size={23} color={tintColor} />;
>>>>>>> 711b2990e0394bffc92e203bc64e3b18ee4bc5e0
      },
    },
  },

  Payment: {
    screen: PaymentScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return <Ionicons name={'md-wallet'} size={23} color={tintColor} />;
      },
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: Color.blue,
    inactiveTintColor: Color.gray,
  }
})

const IndexDrawerNavigator = createDrawerNavigator({
  Index: IndexTabNavigator,
  Profile: ProfileScreen,
  Notification: NotificationScreen,
  Setting: SettingScreen,
  Password: PasswordScreen,
  // Payment: PaymentScreen,
  // demo more screen
}, {
  contentComponent: (props) => (
    <SafeAreaView style={styles.container}>
      <View style={styles.userContainer}>
        {/* <Image
          style={{ width: 100, height: 100 }}
          source={require('../assets/icon/avatar-2.png')}
        /> */}
        <Image
          style={styles.image}
          source={{ uri: 'https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg' }}
        />
        <View>
          <View style={styles.infoContainer}>
            <Ionicons name={'md-person'} size={23} color={Color.blue} />
            <Text style={styles.userInfo}>Ngọc Kenny</Text>
          </View>

          <View style={styles.infoContainer}>
            <Ionicons name={'md-call'} size={23} color={Color.blue} />
            <Text style={styles.userInfo}>0293928398238</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  )
})

// const IndexNavigator = createStackNavigator({
//   IndexDraw: IndexDrawerNavigator,
//   IndexNav: IndexTabNavigator,
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: Color.gray,
    borderWidth: 3
  },

  userContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  userInfo: {
    fontSize: 16,
    padding: 5,
    color: Color.blue
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default createAppContainer(IndexDrawerNavigator)