import React from 'react'
import { View, Text, StyleSheet, Picker } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default DropDown = props => {
  const navigation = useNavigation()
  return (
    <View style={props.style}>
      {props.children ? <Text>{props.children}</Text> : <View />}
      <Picker
        selectedValue={props.value}
        style={styles.pickerStyleType}
        onValueChange={(itemValue, itemIndex) => {
          props.onValueChange(itemValue, itemIndex)
          navigation.navigate(itemValue)
        }}
      >
        {props.items.map((item, id) => (
          <Picker.Item
            key={id}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  pickerStyleType: {
    height: 40,
    color: 'black'
  }
})
