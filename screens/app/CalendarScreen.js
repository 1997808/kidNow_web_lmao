import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { setLoading } from '@actions'
import MainHeader from '@components/MainHeader'

const CalendarScreen = ({ setLoading }) => {
  return (
    <View style={styles.container}>
      <MainHeader/>
      <View style={styles.mainContent}>
        <TouchableOpacity onPress={() => setLoading(true)}>
          <Text>Calendar test loading overlay</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default connect(null, { setLoading })(CalendarScreen)

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
