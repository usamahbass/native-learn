import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screen/about';
import Header from '../shared/header';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} title="About"  />,
            headerStyle: {
              backgroundColor: "#333"
            }
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
