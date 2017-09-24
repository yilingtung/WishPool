import React from 'react';
import { View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
import Me from '../screens/Me';
import UserDetail from '../screens/UserDetail';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me',
    },
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}'s Profile'`,
    }),
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <View style={[styles.icon, {backgroundColor: tintColor}]} />
      ),
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => (
        <View style={[styles.icon, {backgroundColor: tintColor}]} />
      ),
    },
  },
});

const styles = {
  icon: {
    width: 26,
    height: 26,
  },
};
