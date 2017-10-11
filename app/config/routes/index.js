import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FeedStack from './FeedStack/StackNavigation';
import PoolStack from './PoolStack/StackNavigation';
import Ranking from '../../screens/Ranking';
import Recent from '../../screens/Recent';

const style = {
	icon: {
		width: 26,
		height: 26,
	},
};

export const MainTabs = TabNavigator({
	Pool: {
		screen: PoolStack,
		navigationOptions: {
			tabBarLabel: 'Pool',
			tabBarIcon: ({ tintColor }) => <View style={[style.icon, { backgroundColor: tintColor }]} />,
		},
	},
	Feed: {
		screen: FeedStack,
		navigationOptions: {
			tabBarLabel: 'Feed',
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

export const PoolTabs = TabNavigator({
	Recent: {
		screen: Recent,
		navigationOptions: {
			tabBarLabel: 'Recent',
		},
	},
	Ranking: {
		screen: Ranking,
		navigationOptions: {
			tabBarLabel: 'Ranking',
		},
	},
}, {
	...TabNavigator.Presets.AndroidTopTabs,
	tabBarOptions: {
		showIcon: false,
		labelStyle: {
			fontSize: 17,
			fontWeight: 'bold',
		},
		indicatorStyle: {
			borderBottomColor: '#6c751d',
			borderBottomWidth: 5,
		},
		tabStyle: {
			alignItems: 'center',
		},
		activeTintColor: '#FFF',
		inactiveTintColor: '#6c751d',
		style: {
			backgroundColor: '#AFBE31',
			borderTopColor: 'rgba(189, 195, 199, 0.3)',
		}
	}
});
