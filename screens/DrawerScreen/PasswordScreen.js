import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PasswordScreen = props => {
  return (
    <View style={styles.container}>
      <Text>The PasswordScreen page</Text>
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


export default PasswordScreen