import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import IndexNav from '../../../components/profile/IndexNav'

const AttendanceScreen = props => {
  return (
    <View style={styles.container}>
      <IndexNav />
      <View style={styles.mainContent}>
        <TouchableOpacity>
          <Text>AttendanceScreen test loading overlay</Text>
        </TouchableOpacity>
      </View>
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
