import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { setLoading, setTabBarVisit } from '@actions'

import ProfileButton from '@components/profile/ProfileButton'
import InputField from '@components/profile/InputField'
import DropDown from '@components/profile/DropDown'

const ProfileStuScreen = () => {
  const [bloodType, setBloodType] = useState()
  const [date, setDate] = useState()
  const data = {
    bloodType: [
      { label: 'O', value: 'O' },
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'AB', value: 'AB' }
    ],
    sexType: [
      { label: 'Nam', value: 'Nam' },
      { label: 'Nữ', value: 'Nữ' }
    ],
    status: [
      { label: '1', value: '1' },
      { label: '0', value: '0' }
    ],
    date: [
      { label: '13/02/1999', value: '13/02/1999' },
      { label: '16/08/2001', value: '16/08/2001' }
    ]
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg'
          }}
        />
        <View style={styles.btnContainer}>
          <ProfileButton style={styles.btn} pageName={'Parent'}>
            Phụ huynh
          </ProfileButton>
          <ProfileButton style={styles.btn} active>
            Học sinh
          </ProfileButton>
        </View>

        <View style={styles.imgContainer}>
          <Image
            style={styles.avatar}
            source={require('@assets/icon/Child-77.png')}
          />
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.text}>Em: Văn Ngọc</Text>
          <Text style={styles.text}>ID: LMAO38690420353</Text>

          <View style={{ width: '80%' }}>
            <View style={styles.dropContainer}>
              <DropDown
                style={styles.dropDownBig}
                items={data.date}
                value={date}
                onValueChange={value => setDate(value)}
              >
                Ngày sinh
              </DropDown>
              <DropDown style={styles.dropDown} items={data.bloodType}>
                Nhóm máu
              </DropDown>
              <DropDown style={styles.dropDown} items={data.sexType}>
                Giới tính
              </DropDown>
            </View>

            <View style={styles.dropContainer}>
              <DropDown style={styles.dropDownBig} items={data.date}>
                Ngày nhập học
              </DropDown>
              <DropDown style={styles.dropDown} items={data.status}>
                Trạng thái
              </DropDown>
              <DropDown style={styles.dropDown} items={data.status}>
                Tồn tại
              </DropDown>
            </View>

            <InputField>Địa chỉ thường trú</InputField>
            <InputField>Dị ứng (nếu có)</InputField>
            <InputField>Ghi chú thêm</InputField>

            <ProfileButton style={styles.saveBtn} active>
              LƯU CHỈNH SỬA
            </ProfileButton>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default connect(null, { setTabBarVisit, setLoading })(ProfileStuScreen)

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
    resizeMode: 'cover'
  },

  btnContainer: {
    flexDirection: 'row',
    width: '100%'
  },

  btn: {
    width: '50%',
    height: 40
  },

  dropContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  dropDownBig: {
    flex: 45
  },
  dropDown: {
    flex: 25
  },

  text: {
    padding: 5
  },

  saveBtn: {
    marginVertical: 20
  }
})
