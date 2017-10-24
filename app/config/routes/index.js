import React from 'react';
import {
	Image,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import PoolStack from './PoolStack/StackNavigation';
import WishStack from './WishStack/StackNavigation';
import HomeStack from './HomeStack/StackNavigation';
import Ranking from '../../screens/Ranking';
import Recent from '../../screens/Recent';

const iconLobby = require('../../public/images/icon_lobby.png');
const iconLobbyActive = require('../../public/images/icon_lobby_active.png');
const iconHome = require('../../public/images/icon_home.png');
const iconHomeActive = require('../../public/images/icon_home_active.png');
const iconWish = require('../../public/images/icon_wish.png');
const iconWishActive = require('../../public/images/icon_wish_active.png');

const style = {
	icon: {
		width: 32,
		height: 32,
	},
};

export const MainTabs = TabNavigator({
	Pool: {
		screen: PoolStack,
		navigationOptions: {
			tabBarLabel: 'Pool',
			tabBarIcon: ({ focused }) => (
				focused ?
					<Image
						style={style.icon}
						source={iconLobbyActive}
					/>
					:
					<Image
						style={style.icon}
						source={iconLobby}
					/>
			),
		},
	},
	Wish: {
		screen: WishStack,
		navigationOptions: {
			tabBarLabel: 'Wish',
			tabBarIcon: ({ focused }) => (
				focused ?
					<Image
						style={style.icon}
						source={iconWishActive}
					/>
					:
					<Image
						style={style.icon}
						source={iconWish}
					/>
			),
		},
	},
	Home: {
		screen: HomeStack,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ focused }) => (
				focused ?
					<Image
						style={style.icon}
						source={iconHomeActive}
					/>
					:
					<Image
						style={style.icon}
						source={iconHome}
					/>
			),
		},
	},
}, {
	tabBarOptions: {
		activeTintColor: '#34495E',
		inactiveTintColor: '#bdc3c7',
		style: {
			backgroundColor: '#FFF',
			borderTopColor: 'rgba(189, 195, 199, 0.3)',
		},
	},
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
	initialRouteName: 'Recent',
	tabBarOptions: {
		showIcon: false,
		labelStyle: {
			fontSize: 17,
			fontWeight: 'bold',
		},
		indicatorStyle: {
			borderBottomColor: '#7ac6d6',
			borderBottomWidth: 5,
		},
		tabStyle: {
			alignItems: 'center',
		},
		activeTintColor: 'rgb(52, 73, 94)',
		inactiveTintColor: 'rgba(52, 73, 94, 0.7)',
		style: {
			backgroundColor: '#FFF',
			borderTopColor: 'rgba(189, 195, 199, 0.3)',
		},
	},
});
