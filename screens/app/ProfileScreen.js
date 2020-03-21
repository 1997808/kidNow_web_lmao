import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { setLoading, setTabBarVisit } from '../../actions'
import { useFocusEffect } from '@react-navigation/native'

const ProfileScreen = ({ setTabBarVisit, setLoading }) => {
  useFocusEffect(() => {
    setTabBarVisit(false)
    return () => setTabBarVisit(true)
  })
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <TouchableOpacity onPress={() => setLoading(true)}>
          <Text>ProfileScreen test loading overlay</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default connect(null, { setTabBarVisit, setLoading })(ProfileScreen)

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
