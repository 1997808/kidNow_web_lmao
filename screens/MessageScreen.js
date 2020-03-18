import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MessageScreen = props => {
  return (
    <View style={styles.container}>
      <Text>The MessageScreen page</Text>
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


export default MessageScreen