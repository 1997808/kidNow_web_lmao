import React from 'react'
import { connect } from 'react-redux'
import { get as _get } from 'lodash'

import WakeupScreen from './WakeupScreen'
import AuthNavigator from '../navigation/AuthNavigator'
import AppNavigator from '../navigation/AppNavigator'

const AppRoot = ({ state }) => {
  let isLogin = _get(state, 'auth.token')
  let wakeup = _get(state, 'app.wakeup')

  if (!wakeup) {
    return <WakeupScreen />
  }
  return !isLogin ? <AuthNavigator /> : <AppNavigator />
}

const mapState = state => ({ state })

export default connect(mapState, null)(AppRoot)
