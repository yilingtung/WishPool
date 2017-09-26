import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FeedNavigation from './FeedNavigation';
import MeNavigation from './MeNavigation';

const styles = {
	icon: {
		width: 26,
		height: 26,
	},
};

export const Tabs = TabNavigator({
	Feed: {
		screen: FeedNavigation,
		navigationOptions: {
			tabBarLabel: 'Feed',
			tabBarIcon: ({ tintColor }) => <View style={[styles.icon, { backgroundColor: tintColor }]} />,
		},
	},
	Me: {
		screen: MeNavigation,
		navigationOptions: {
			tabBarLabel: 'Me',
			tabBarIcon: ({ tintColor }) => <View style={[styles.icon, { backgroundColor: tintColor }]} />,
		},
	},
});
