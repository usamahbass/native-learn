import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function Home({navigation}) {
  const [reviews, setReviews] = React.useState([
    {
      id: 1,
      title: 'Si Kancil',
      rating: 5,
      body: 'lorem ipsum color sit amet',
    },
    {
      id: 2,
      title: 'Sang Kuriang',
      rating: 10,
      body: 'lorem ipsum color sit amet',
    },
    {
      id: 3,
      title: 'Si Beruang',
      rating: 3,
      body: 'lorem ipsum color sit amet',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
            // passing data item to review screen
          <TouchableOpacity onPress={() => navigation.navigate("Review", item)} >
            <Text style={globalStyles.title} key={item.id}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
