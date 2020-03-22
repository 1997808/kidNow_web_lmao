import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default InputField = props => (
  <View>
    <Text style={{ padding: 5, fontSize: 16 }}>{props.children}</Text>
    <TextInput
      style={styles.inputField}
      placeholder="Type here"
    // onChangeText={() => { }}
    // value={}
    />
  </View>
)

const styles = StyleSheet.create({
  inputField: {
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10
  },
})


