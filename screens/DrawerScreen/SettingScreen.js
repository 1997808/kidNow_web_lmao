import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingScreen = props => {
  return (
    <View style={styles.container}>
      <Text>The SettingScreen page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default SettingScreen