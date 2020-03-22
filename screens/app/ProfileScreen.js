import * as React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Button, Image, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { setLoading, setTabBarVisit } from '../../actions'
import { useFocusEffect } from '@react-navigation/native'

import RadioButton from '../../components/profile/RadioButton'
import ProfileButton from '../../components/profile/ProfileButton'
import InputField from '../../components/profile/InputField'

const ProfileScreen = ({ setTabBarVisit, setLoading }) => {
  useFocusEffect(() => {
    setTabBarVisit(false)
    return () => setTabBarVisit(true)
  })
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg' }}
      />
      <View style={styles.btnContainer}>
        <ProfileButton styles={styles.btn} active>Phụ huynh</ProfileButton>
        <ProfileButton styles={styles.btn}>Học sinh</ProfileButton>
      </View>

      <View style={styles.imgContainer}>
        <Image
          style={styles.avatar}
          source={require('../../assets/icon/Child-77.png')}
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>Phụ huynh: Nguyễn Văn Ngọc</Text>
        <Text>Tài khoản: 0380006353</Text>

        <View style={{ width: '80%' }}>
          <InputField>Số điện thoại</InputField>
          <InputField>Số điện thoại dự phòng</InputField>
          <InputField>Email</InputField>

          <Text style={{ padding: 5, fontSize: 16 }}>Giới tính</Text>
          <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <RadioButton selected />
            <Text>Nam</Text>

            <RadioButton />
            <Text>Nữ</Text>
          </View>

          <InputField>Địa chỉ</InputField>
          <ProfileButton active>LƯU CHỈNH SỬA</ProfileButton>
        </View>
      </View>


      {/* <Text>{$t('')}</Text> */}
      {/* <Text>{$t('validation.accepted', { field: 'abc' })}</Text> */}
    </View >
  )
}

export default connect(null, { setTabBarVisit, setLoading })(ProfileScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'flex-start'
  },

  imgContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 120
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },

  btnContainer: {
    flexDirection: 'row',
    width: '100%',
  },

  btn: {
    width: '50%',
    height: 40
  },
})