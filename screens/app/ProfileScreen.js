import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native'
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

        {/* <Button title="vn" onPress={() => setLang('vi-vn')} /> btn for language */}
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
