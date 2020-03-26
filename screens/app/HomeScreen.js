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
  const getDataFromServer = async () => {
    console.log(dataClient)

    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9raWRzbm93LmVkdS52blwvYXBpXC9wYXJlbnRcL2xvZ2luIiwiaWF0IjoxNTg1MTEzNzQwLCJleHAiOjE1ODUxMTczNDAsIm5iZiI6MTU4NTExMzc0MCwianRpIjoiREJmVWVwa2JCcFViUEJpRSIsInN1YiI6NzUsInBydiI6ImNmMjg0YzJiMWUwNmYzM2MyNmJkNTc5NzU2NmQ5ZmQ3NGJlMTFiZjUifQ.wO4xtMbJp6vhdoIV2tk36zNtrnQwkpJcVIMnRCGmsSs'
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    await axios
      .get('parent/food')
      .then(responce => {
        responce.data = {
          food: [
            {
              name: 'food1'
            },
            {
              name: 'food2'
            }
          ],
          diari: [
            {
              name: 'diari1'
            },
            {
              name: 'diari2'
            }
          ]
        }
        setDataServer(responce.data)
        setDataClient([
          {
            name: 'diari1'
          },
          {
            name: 'diari2'
          }
        ])
      })
      .catch(errors => {
        console.log(errors.responce)
      })
  }
  const dataFilter = type => {
    const data_filter = dataServer.filter(data => data[type])
    setDataClient(data_filter)
  }
  useEffect(() => {
    getDataFromServer()
  }, [])
  return (
    <View style={styles.container}>
      {/* <Button onPress={() => dataFilter('food')} title="food"></Button>
      <Button onPress={() => dataFilter('diari')} title="diari"></Button> */}
      <View style={styles.container}>
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
    flex: 1
  }
})
