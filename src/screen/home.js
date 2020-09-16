import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../shared/card';

export default function Home({navigation}) {
  const [reviews] = React.useState([
    {
      id: 1,
      title: 'Si Kancil',
      rating: 5,
      body: 'lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      title: 'Sang Kuriang',
      rating: 10,
      body: 'lorem ipsum dolor sit amet',
    },
    {
      id: 3,
      title: 'Si Beruang',
      rating: 3,
      body: 'lorem ipsum dolor sit amet',
    },
  ]);

  const [open, setOpen] = React.useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal style visible={open} animationType="slide">
        <View style={styles.modalContent}>
          <Icon
            name="close"
            size={40}
            onPress={() => setOpen(false)}
            style={styles.toggleModal}
          />
          <Text>Hello from modal !</Text>
        </View>
      </Modal>
      <Icon
        name="add"
        size={40}
        onPress={() => setOpen(true)}
        style={styles.toggleModal}
      />
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          // passing data item to review screen
          <Card key={item.id}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Review', item)}>
              <Text style={globalStyles.title}>{item.title}</Text>
            </TouchableOpacity>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  toggleModal: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalContent: {
    flex: 1,
  },
});
