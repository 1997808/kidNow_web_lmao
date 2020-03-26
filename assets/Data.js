export default Data = {
  attendance = {
    id: 'p1',
    description: 'Đã đến trường điểm danh',
    time: '7h49 pm',
    teacher: 'Vũ Minh Hải'
  },

  diary = {
    id: 'p1',
    student: 'Đức',
    description: 'Chào mừng bạn đến với ứng dụng',
    time: '13h30 pm',
    teacher: 'Vũ Minh Hải'
  },

  lunch = {
    id: 'p1',
    food: 'Bánh mỳ, Sữa, Hoa quả',
    time: '13h30 pm',
    teacher: 'Vũ Minh Hải'
  },

  health =[
    {
      id: 'p1',
      status: 1,
      description: 'Đức đã gặp sự cố lmao',
      time: '13h30 pm',
      teacher: 'Vũ Minh Hải'
    },

    {
      id: 'p1',
      status: 0,
      description: 'Đức has been slained',
      time: '13h30 pm',
      teacher: 'Vũ Minh Hải'
    }],

  imgVideo = {
    id: 'p1',
    description: 'Đức hiện lên trong bức ảnh',
    url: 'https://aboutreact.com/wp-content/uploads/2018/07/react_native_imageview.png',
    time: '13h33 pm',
    teacher: 'Vũ Minh Hải',
  }
}

// const HomeScreen = ({ setAuth, navigation }) => {
//   const [dataServer, setDataServer] = useState()
//   const [dataClient, setDataClient] = useState([
//     {
//       name: 'food1'
//     },
//     {
//       name: 'food2'
//     }
//   ])
//   const getDataFromServer = async () => {
//     const token =
//       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9raWRzbm93LmVkdS52blwvYXBpXC9wYXJlbnRcL2xvZ2luIiwiaWF0IjoxNTg1MTEzNzQwLCJleHAiOjE1ODUxMTczNDAsIm5iZiI6MTU4NTExMzc0MCwianRpIjoiREJmVWVwa2JCcFViUEJpRSIsInN1YiI6NzUsInBydiI6ImNmMjg0YzJiMWUwNmYzM2MyNmJkNTc5NzU2NmQ5ZmQ3NGJlMTFiZjUifQ.wO4xtMbJp6vhdoIV2tk36zNtrnQwkpJcVIMnRCGmsSs'
//     window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
//     await axios
//       .get('parent/food')
//       .then(res => {
//         res.data = {
//           food: [
//             {
//               name: 'food1'
//             },
//             {
//               name: 'food2'
//             }
//           ],
//           diari: [
//             {
//               name: 'diari1'
//             },
//             {
//               name: 'diari2'
//             }
//           ]
//         }
//         setDataServer(res.data)
//         setDataClient([
//           {
//             name: 'diari1'
//           },
//           {
//             name: 'diari2'
//           }
//         ])
//       })
//       .catch(errors => {
//         console.log(errors.res)
//       })
//   }
//   const dataFilter = type => {
//     const data_filter = dataServer.filter(data => data[type])
//     setDataClient(data_filter)
//   }
//   useEffect(() => {
//     getDataFromServer()
//   }, [])
//   return (
//     <View style={styles.container}>
//       <IndexNav />
//       <View>
//         {dataClient.map(data => (
//           <Text>{data.name}</Text>
//         ))}
//       </View>
//     </View>
//   )
// }