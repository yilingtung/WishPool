import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FeedStack from './FeedStack/StackNavigation';
import MeStack from './MeStack/StackNavigation';

const styles = {
	icon: {
		width: 26,
		height: 26,
	},
};

export const Tabs = TabNavigator({
	Feed: {
		screen: FeedStack,
		navigationOptions: {
			tabBarLabel: 'Feed',
			tabBarIcon: ({ tintColor }) => <View style={[styles.icon, { backgroundColor: tintColor }]} />,
		},
	},
	Me: {
		screen: MeStack,
		navigationOptions: {
			tabBarLabel: 'Me',
			tabBarIcon: ({ tintColor }) => <View style={[styles.icon, { backgroundColor: tintColor }]} />,
		},
	},
});
