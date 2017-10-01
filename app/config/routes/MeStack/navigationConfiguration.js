import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Me from '../../../screens/Me';
import UserDetail from '../../../screens/UserDetail';
import { meNavBackto } from '../../../store/navs/actions';

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
				onPress={() => navigation.dispatch(meNavBackto())}
				title="BACK"
			/>,
		}),
	},
};

export default StackNavigator(routeConfiguration);
