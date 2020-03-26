import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import IndexNav from '@components/index/profile/IndexNav'
import Attendance from '@components/index/Attendance'
import Data from '@assets/Data'

const AttendanceScreen = props => {
  return (
    <View style={styles.container}>
      <IndexNav />
      <Attendance />
      <Attendance />
      <Attendance />
      <Attendance />
      <Attendance />
    </View>
  )
}

export default AttendanceScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
