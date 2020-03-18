import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import IndexDrawerNavigator from './navigation/IndexNavigation'

export default function App() {
  return (
    <View style={styles.container}>
      <IndexDrawerNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
