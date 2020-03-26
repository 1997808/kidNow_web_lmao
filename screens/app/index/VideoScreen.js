import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import IndexNav from '../../../components/profile/IndexNav'

const VideoScreen = props => {
  return (
    <View style={styles.container}>
      <IndexNav />
      <View style={styles.mainContent}>
        <TouchableOpacity>
          <Text>VideoScreen test loading overlay</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VideoScreen

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
