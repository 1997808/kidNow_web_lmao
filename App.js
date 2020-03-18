import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import IndexTabNavigator from './navigation/IndexNavigation'

export default function App() {
  return (
    <View style={styles.container}>
      <IndexTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
