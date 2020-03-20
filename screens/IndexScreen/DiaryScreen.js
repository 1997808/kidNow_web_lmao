import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DiaryScreen = props => {
  return (
    <View style={styles.container}>
      <Text>The DiaryScreen page</Text>
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


export default DiaryScreen