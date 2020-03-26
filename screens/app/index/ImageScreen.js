import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import IndexNav from '@components/index/profile/IndexNav'

const ImageScreen = props => {
  return (
    <View style={styles.container}>
      <IndexNav />
      <View style={styles.mainContent}>
        <TouchableOpacity>
          <Text>ImageScreen test loading overlay</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ImageScreen

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
