import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { setLoading } from '../../actions'

const NoteScreen = ({ setLoading }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>setLoading(true)}>
        <Text>Note test loading overlay</Text>
      </TouchableOpacity>
    </View>
  )
}

export default connect(null, { setLoading })(NoteScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})

