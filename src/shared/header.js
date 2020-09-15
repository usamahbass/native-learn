import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({navigation, title}) {
  return (
    <View style={styles.header}>
      <Icon
        name="menu"
        size={28}
        color="#fff"
        style={styles.icon}
        onPress={() => navigation.openDrawer()}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 19,
    letterSpacing: 1,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
});
