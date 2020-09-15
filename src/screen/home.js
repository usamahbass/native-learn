import React from 'react';
import { View, Text, StyleSheet } from "react-native"

export default function Home() {
    return (
       <View style={styles.container}>
           <Text style={styles.title} >This Home</Text>
       </View>
    )
}

const styles = StyleSheet.create({
   container: {
       padding: 24
   },
   title: {
       fontFamily: "Poppins-Regular",
       fontSize: 20
   }
})

