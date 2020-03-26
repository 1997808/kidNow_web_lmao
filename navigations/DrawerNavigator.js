import React from 'react'
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFocusEffect } from '@react-navigation/native';
import { setTabBarVisit } from '@actions/index'

import HomeScreen from '@screens/app/HomeScreen'
import ProfileScreen from '@screens/app/ProfileScreen'
import ProfileStuScreen from '@screens/app/ProfileStuScreen'

import AttendanceScreen from '@screens/app/index/AttendanceScreen'
import DiaryScreen from '@screens/app/index/DiaryScreen'
import HealthScreen from '@screens/app/index/HealthScreen'
import ImageScreen from '@screens/app/index/ImageScreen'
import LearnPlayScreen from '@screens/app/index/LearnPlayScreen'
import MenuScreen from '@screens/app/index/MenuScreen'
import VideoScreen from '@screens/app/index/VideoScreen'

const Stack = createStackNavigator();
const IndexNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
      <Stack.Screen name="Diary" component={DiaryScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Health" component={HealthScreen} />
      <Stack.Screen name="LearnPlay" component={LearnPlayScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
    </Stack.Navigator>
  );
}


const Profile = ({ setTabBarVisit }) => {
  useFocusEffect(() => {
    setTabBarVisit(false)
    return () => { setTabBarVisit(true) }
  })
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Parent" component={ProfileScreen} />
      <Stack.Screen name="Student" component={ProfileStuScreen} />
    </Stack.Navigator>
  );
}
const ProfileNavigator = connect(null, { setTabBarVisit })(Profile)


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Index">
      <Drawer.Screen name="Index" component={IndexNavigator} />
      <Drawer.Screen name="Profile" component={ProfileNavigator} />
    </Drawer.Navigator>
  );
}

export default connect(null, { setTabBarVisit })(DrawerNavigator)
