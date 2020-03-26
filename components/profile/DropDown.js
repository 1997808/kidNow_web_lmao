import React from 'react'
import { View, Text, StyleSheet, Picker } from 'react-native'

export default DropDown = props => {
  return (
    <View style={props.style}>
      {props.children ? <Text>{props.children}</Text> : <View />}
      <Picker
        selectedValue={props.value}
        style={styles.pickerStyleType}
        onValueChange={(itemValue, itemIndex) =>
          props.onValueChange(itemValue, itemIndex)
        }
      >
        {props.items.map((item, id) => (
          <Picker.Item
            key={id}
            label={item.label}
            value={item.value}
            onPress={() => {
              navigation.navigate(props.pageName)
            }}
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
