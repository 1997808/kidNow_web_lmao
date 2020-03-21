import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setWakeup, setAuth } from '../actions'
import { View, ActivityIndicator } from 'react-native'
import { get as _get } from 'lodash'

import Colors from '../constants/Colors'

const LoadingScreen = ({ setWakeup, setAuth }) => {
  const checkLogin = async () => {
    setTimeout(() => {
      setAuth(null)
      setWakeup(true)
    }, 2000)
  }
  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  )
}
export default connect(null, { setWakeup, setAuth })(LoadingScreen)
