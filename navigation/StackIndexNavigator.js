//KhanhBranch
import React from 'react'
import { View, Text, StyleSheet, Image, Platform, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import IndexScreen from '../screens/IndexScreen'
import AttendanceScreen from '../screens/IndexScreen/AttendanceScreen'
import DiaryScreen from '../screens/IndexScreen/DiaryScreen'
import HealthScreen from '../screens/IndexScreen/HealthScreen'
import ImgVideoScreen from '../screens/IndexScreen/ImgVideoScreen'
import LunchScreen from '../screens/IndexScreen/LunchScreen'

import { createStackNavigator } from 'react-navigation-stack'
import Color from '../constants/Color'

const IndexStackNavigator = createStackNavigator({
  Index: IndexScreen,
  Attendance: AttendanceScreen,
  Diary: DiaryScreen,
  Health: HealthScreen,
  ImgVideo: ImgVideoScreen,
  Lunch: LunchScreen,
})