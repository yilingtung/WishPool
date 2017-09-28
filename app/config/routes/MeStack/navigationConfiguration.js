import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Me from '../../../screens/Me';
import UserDetail from '../../../screens/UserDetail';
import * as types from '../../../store/navs/actionTypes';

const routeConfiguration = {
	Me: {
		screen: Me,
		navigationOptions: {
			title: 'Me',
		},
	},
	UserDetail: {
		screen: UserDetail,
		navigationOptions: ({ navigation }) => ({
			title: `${navigation.state.params.name}'s Profile'`,
			headerLeft:	<Button
				onPress={() => navigation.dispatch({ type: types.ME_NAV_BACK_TO })}
				title="BACK"
			/>,
		}),
	},
};

export default StackNavigator(routeConfiguration);
