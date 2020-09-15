import React from 'react';
import { View, Text, StyleSheet } from "react-native"

export default function Review() {
    return (
       <View style={styles.container}>
           <Text>This Review</Text>
       </View>
    )
}

const styles = StyleSheet.create({
   container: {
       padding: 24
   }
})

