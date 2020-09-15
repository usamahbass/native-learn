import React from 'react';
import {View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>This is Home</Text>
      <Button
        title="Go to Review"
        color="#000"
        onPress={() => navigation.push('Review')}
      />
    </View>
  );
}
