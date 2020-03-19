import React from 'react'
import { View, Text, StyleSheet,FlatList, Alert, Platform } from 'react-native'
import MessageListItem from '../components/messageComponents/MessageListItem'

export default class Messages extends React.Component{
  
  
  constructor(props){
    super(props);
    this.state={
      messages:[
        {
          id:1,
          title:'Thực đơn',
          content:'',
          sender:'Vũ Minh Hải',
          date:'11:11 AM,05/03/2020'
        },
        {
          id:2,
          title:'Chơi và học',
          content:'',
          sender:'Vũ Minh Hải',
          date:'11:11 AM,02/03/2020'
        }

      ]
    };
  }

  
  render(){
    const {messageList}=this.state.messages;
    return(
      <View style={styles.container}>
        <FlatList
        data={messageList}
        renderItem={({ item})=>
          <MessageListItem
            message={item}
           
            onPress={()=>{
              Alert.alert("Pressed");
            }}
          ></MessageListItem>
        }
        keyExtractor={item => `${item.id}`}
        ></FlatList>
      </View>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 20,
  }
})


