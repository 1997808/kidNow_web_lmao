import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/app/HomeScreen'
import ProfileScreen from '../screens/app/ProfileScreen'
import { setTabBarVisit } from '../actions/index'
import { connect } from 'react-redux';

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
