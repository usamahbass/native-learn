import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/home';
import Review from '../screen/review';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
