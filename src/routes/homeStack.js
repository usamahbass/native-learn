import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screen/home';
import Review from '../screen/review';

const screen = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Fairy Tales',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'green',
      },
    },
  },
  Review: {
    screen: Review,
    navigationOptions: {
      title: 'Review Fairy Tales',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'green',
      },
    },
  },
};

const HomeStack = createStackNavigator(screen, {
    // if you use default options 
    defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerStyle: {
            backgroundColor: "green"
        }
    }
});

export default createAppContainer(HomeStack);
