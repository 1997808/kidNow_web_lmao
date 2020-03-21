import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabBarIcon from '../components/TabBarIcon'

import CalendarScreen from '../screens/app/CalendarScreen'
import MessageScreen from '../screens/app/MessageScreen'
import NoteScreen from '../screens/app/NoteScreen'
import HomeScreen from '../screens/app/HomeScreen'
import PayScreen from '../screens/app/PayScreen'
import ProfileScreen from '../screens/app/ProfileScreen'

const App = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <App.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
        <App.Screen
          name="Home"
          component={MyDrawer}
          options={{
            title: $t('screens.home.title'),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-home" />
            )
          }}
        />
        <App.Screen
          name="Note"
          component={NoteScreen}
          options={{
            title: $t('screens.note.title'),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-bookmark" />
            )
          }}
        />
        <App.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            title: $t('screens.calendar.title'),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-calendar" />
            )
          }}
        />
        <App.Screen
          name="Message"
          component={MessageScreen}
          options={{
            title: $t('screens.message.title'),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-mail" />
            )
          }}
        />
        <App.Screen
          name="Pay"
          component={PayScreen}
          options={{
            title: $t('screens.pay.title'),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-card" />
            )
          }}
        />
      </App.Navigator>
    </NavigationContainer>
  )
}
