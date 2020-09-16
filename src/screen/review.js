import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Review({route}) {
  const {title, body, rating} = route.params;
  const icon = Array.from(Array(rating).keys())

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text style={globalStyles.title}>{body}</Text>
      <View style={styles.rating}>
        <Text>Rating :</Text>
        {icon.map((index) => (
          <Icon key={index} name="star" color="#ffe234" size={20} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  },
});
