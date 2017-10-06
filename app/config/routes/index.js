import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FeedStack from './FeedStack/StackNavigation';
import MeStack from './MeStack/StackNavigation';

const style = {
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
			tabBarIcon: ({ tintColor }) => <View style={[style.icon, { backgroundColor: tintColor }]} />,
		},
	},
	Me: {
		screen: MeStack,
		navigationOptions: {
			tabBarLabel: 'Me',
			tabBarIcon: ({ tintColor }) => <View style={[style.icon, { backgroundColor: tintColor }]} />,
		},
	},
}, {
	tabBarOptions: {
		activeTintColor: '#34495E',
		inactiveTintColor: '#bdc3c7',
		style: {
			backgroundColor: '#FFF',
			borderTopColor: 'rgba(189, 195, 199, 0.3)',
		}
	}
});
