import { StackNavigator } from 'react-navigation';

import HomeScreen from '../app/screens/Home';
import GameScreen from '../app/screens/Game';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Game: {
    screen: GameScreen,
  }
});