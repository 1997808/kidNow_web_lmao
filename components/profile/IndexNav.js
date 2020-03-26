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
      { label: 'Mọi hoạt động', value: '0' },
      { label: 'Điểm danh', value: '1' },
      { label: 'Nhật ký', value: '2' },
      { label: 'Thực đơn', value: '3' },
      { label: 'Sức khỏe', value: '4' },
      { label: 'Chơi và Học', value: '5' },
      { label: 'Ảnh', value: '6' },
      { label: 'Video', value: 'B' }
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
        goBack={() => navigation.navigate('Home')}
      />
      <View style={styles.dropContainer}>
        <DropDown
          style={styles.dropDownBig}
          items={data.page}
          value={page}
          onValueChange={value => setPage(value)}
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
    flex: 1,
    backgroundColor: '#fff',
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
