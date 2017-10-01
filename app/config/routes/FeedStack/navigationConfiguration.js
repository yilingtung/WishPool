import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Feed from '../../../screens/Feed';
import WishDetail from '../../../screens/WishDetail';
import { backto } from '../../../store/navs/actions';

const routeConfiguration = {
	Feed: {
		screen: Feed,
		navigationOptions: {
			title: 'Feed',
		},
	},
	WishDetail: {
		screen: WishDetail,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params.text,
			headerLeft:	<Button
				onPress={() => navigation.dispatch(backto())}
				title="BACK"
			/>,
		}),
	},
};

export default StackNavigator(routeConfiguration);
