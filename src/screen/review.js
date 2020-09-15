import React from 'react';
import { View, Text, Button } from "react-native"
import { globalStyles } from '../styles/globalStyles';

export default function Review({navigation}) {
    return (
       <View style={globalStyles.container}>
           <Text>This Review</Text>

           <Button title="Back to home" color="#000" onPress={() => navigation.goBack()} />
       </View>
    )
}

