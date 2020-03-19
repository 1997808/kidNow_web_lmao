import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

export default function MessageListItem(props){
    const {message , onPress}=props
    // nhấn vào từng cái message sẽ ra từng event onPress
    return (
    <TouchableOpacity   
        activeOpacity={0.5} //onPress là onPress nhận từ props
        onPress={onPress}>

        <View style={styles.container}>
        <Text style={styles.title}>{message.title}</Text>
        <Text style={styles.content}>Nội dung {message.content}</Text>
        <Text style={styles.sender}>{message.sender}</Text>
        <Text style={styles.date}>{message.date}</Text>
        </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        fontSize:18,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da'
    },
    title:{

    },
    content:{

    },
    sender:{

    },
    date:{

    }

});