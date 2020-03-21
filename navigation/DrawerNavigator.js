import React from 'react'
import { connect } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { setTabBarVisit } from '../actions/index'

import HomeScreen from '../screens/app/HomeScreen'
import ProfileScreen from '../screens/app/ProfileScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
}

export default connect(null, { setTabBarVisit })(DrawerNavigator)
