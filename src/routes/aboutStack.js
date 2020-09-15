import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screen/about';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
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

export default AboutStack;
