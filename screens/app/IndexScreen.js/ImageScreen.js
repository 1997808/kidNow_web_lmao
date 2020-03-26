import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import MainHeader from '@components/MainHeader'

const ImageScreen = props => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <View style={styles.mainContent}>
        <TouchableOpacity>
          <Text>Calendar test loading overlay</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default connect(null, {})(ImageScreen)

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
