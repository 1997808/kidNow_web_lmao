import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { setAuth } from '@actions'
import IndexNav from '@components/profile/IndexNav'

const HomeScreen = ({ setAuth, navigation }) => {
  const [dataServer, setDataServer] = useState()
  const [dataClient, setDataClient] = useState([
    {
      name: 'food1'
    },
    {
      name: 'food2'
    }
  ])
  return (
    <View style={styles.container}>
      <IndexNav />
      <View>
        {dataClient.map(data => (
          <Text>{data.name}</Text>
        ))}
      </View>
    </View>
  )
}

export default connect(null, { setAuth })(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
