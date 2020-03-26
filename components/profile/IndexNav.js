import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MainHeader from '@components/MainHeader'
import DropDown from '@components/profile/DropDown'
import Colors from '@constants/Colors'

const IndexNav = ({ navigation }, props) => {
  const [page, setPage] = useState('0')
  const [date, setDate] = useState('2020')
  const data = {
    page: [
      { label: 'Mọi hoạt động', value: 'Home' },
      { label: 'Điểm danh', value: 'Attendance' },
      { label: 'Nhật ký', value: 'Diary' },
      { label: 'Thực đơn', value: 'Menu' },
      { label: 'Sức khỏe', value: 'Health' },
      { label: 'Chơi và Học', value: 'LearnPlay' },
      { label: 'Ảnh', value: 'Image' },
      { label: 'Video', value: 'Video' }
    ],
    date: [
      { label: 'Năm hiện tại', value: '2020' },
      { label: '06/2020', value: '06/2020' },
      { label: '05/2020', value: '05/2020' },
      { label: '04/2020', value: '04/2020' },
      { label: '03/2020', value: '03/2020' },
      { label: '02/2020', value: '02/2020' },
      { label: '01/2020', value: '01/2020' }
    ]
  }
  return (
    <View style={[styles.container, props.style]}>
      <MainHeader
        title={$t('screens.home.title')}
        hasAvatar
        hasLogo
      // goBack={() => navigation.navigate('Home')}
      />
      <View style={styles.dropContainer}>
        <DropDown
          style={styles.dropDownBig}
          items={data.page}
          value={page}
          onValueChange={value => setPage(value)}
          pageName={'Attendance'}
        />

        <DropDown
          style={styles.dropDownBig}
          items={data.date}
          value={date}
          onValueChange={value => setDate(value)}
        />
      </View>
      <View style={styles.btnContainer}>
        <Text style={styles.text}>{date}</Text>
      </View>
      <View style={styles.mainContent}></View>
    </View>
  )
}

export default IndexNav

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  dropContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  dropDownBig: {
    width: '48%',
    paddingHorizontal: 2,
    borderWidth: 1,
    marginVertical: 20,
    borderRadius: 10
  },

  btnContainer: {
    width: '35%',
    height: 36,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff'
  }
})
