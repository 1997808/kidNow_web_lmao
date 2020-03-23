import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

export default DropDown = props => {
  return (
    <View style={props.styles}>
      <Text>{props.children}</Text>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={props.items}
      />
    </View>
  );
};

// items={[
//   { label: 'Football', value: 'football' },
//   { label: 'Baseball', value: 'baseball' },
//   { label: 'Hockey', value: 'hockey' },
// ]}