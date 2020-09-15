import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screen/home';
import Review from '../screen/review';

const screen = {
  Home: {
    screen: Home,
  },
  Review: {
    screen: Review,
  },
};

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack);
