import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const IndexScreen = props => {
  return (
    <View style={styles.container}>
      <Text>File index</Text>
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


export default IndexScreen