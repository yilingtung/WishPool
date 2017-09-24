import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import Wish from '../components/Wish';

class Feed extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Wish />
        </View>
      </ScrollView>
    );
  }
}

export default Feed;
