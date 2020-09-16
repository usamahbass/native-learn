import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/home';
import Review from '../screen/review';
import Header from '../shared/header';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} title="Dongeng App" />,
            headerStyle: {
              backgroundColor: "#333"
            }
          };
        }}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{
          headerStyle: {
            backgroundColor: '#333',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
