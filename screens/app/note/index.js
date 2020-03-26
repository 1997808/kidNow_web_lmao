import React from 'react'
import { View, Text, Button, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import NoteScreen from './NoteScreen'
import NoteInfoScreen from './NoteInfoScreen'
const Note = createStackNavigator()
const NoteNavigator = () => {
    return (
        <Note.Navigator>
            <Note.Screen
                name="Note"
                component={NoteScreen}
                options={{
                    header:()=> null
                }} />
            <Note.Screen
                name="NoteInfo"
                component={NoteInfoScreen}
                options={{
                    header:()=> null
                }} />
        </Note.Navigator>
    );
}

export default NoteNavigator;