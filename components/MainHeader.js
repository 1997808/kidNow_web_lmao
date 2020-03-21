import React from 'react'
import Colors from '../constants/Colors'
import { Header } from 'react-native-elements'
export default function MainHeader({ title, titleStyle, goBack, noBack }) {
  const titStyle = {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 16
  }
  return (
    <Header
      leftComponent={
        goBack
          ? {
              icon: 'keyboard-arrow-left',
              size: 25,
              color: Colors.primary,
              onPress: goBack
            }
          : null
      }
      centerComponent={{
        text: title || 'No Title',
        style: titleStyle || titStyle
      }}
      backgroundColor={Colors.white}
    />
  )
}
