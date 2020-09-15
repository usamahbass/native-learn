import React from 'react';
import { View, Text } from "react-native"
import { globalStyles } from '../styles/globalStyles';

export default function Home() {
    return (
       <View style={globalStyles.container}>
           <Text style={globalStyles.title} >This Home</Text>
       </View>
    )
}


