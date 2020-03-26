import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Diary = props => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
        <Ionicons name="md-checkbox-outline" size={30} style={{ margin: 15 }} />
        <View style={{ width: '90%' }}>
          <Text style={{ marginVertical: 5 }}>Đức đã điểm danh lúc 8:00 AM</Text>
          <View style={styles.rowContainer}>
            <Text>8:00 AM</Text>
            <Text>Vũ Minh Hải</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 6,
    borderBottomWidth: 1
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    justifyContent: 'space-between'
  },
})

export default Diary