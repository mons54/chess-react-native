import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class GameScreen extends React.Component {

  static navigationOptions = {
    title: 'Game',
  }

  render() {
    return (
      <View>
        <Text>Game Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go to home"
        />
      </View>
    );
  }
}