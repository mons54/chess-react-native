import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Game')}
          title="Go to game"
        />
      </View>
    );
  }
}