import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ranking from './Ranking';
import Recent from './Recent';

const style = {
	icon: {
		width: 26,
		height: 26,
	},
};

export default TabNavigator({
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
