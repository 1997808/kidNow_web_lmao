import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HealthScreen = props => {
  return (
    <View style={styles.container}>
      <Text>The HealthScreen page</Text>
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


export default HealthScreen