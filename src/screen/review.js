import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function Review({route}) {
  const {title, body, rating} = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text style={globalStyles.title}>{body}</Text>
      <Text style={globalStyles.title}>{rating}</Text>
    </View>
  );
}
