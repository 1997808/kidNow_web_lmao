import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Text, Button, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { setAuth } from '@actions'
import IndexNav from '@components/index/profile/IndexNav'
import Attendance from '@components/index/Attendance'
import Data from '@assets/Data'

const HomeScreen = ({ setAuth, navigation }) => {
  const [dataServer, setDataServer] = useState()
  const [dataClient, setDataClient] = useState()

  const data = Data.attendance
  console.log(data)
  return (
    <View style={styles.container}>
      <ScrollView>
        <IndexNav />
        <Attendance />
      </ScrollView>
    </View>
  )
}

export default connect(null, { setAuth })(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  item: {
    paddingVertical: 6,
    borderBottomWidth: 1
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'space-between'
  },
})
