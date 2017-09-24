import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';

class Me extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text>
          lll
          </Text>
          <Button
            onPress={() => this.props.navigation.navigate('UserDetail', {name: 'Lucy'})}
            title="Lucy"
          />
        </View>
      </ScrollView>
    );
  }
}

export default Me;
