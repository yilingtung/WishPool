import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Feed from '../../../screens/Feed';
import WishDetail from '../../../screens/WishDetail';
import { backto } from '../../../store/navs/actions';
import style from '../style';

export default StackNavigator({
	Feed: {
		screen: Feed,
		navigationOptions: {
			title: 'Feed',
			headerStyle: style.header,
			headerTitleStyle: style.headerTitle,
		},
	},
	WishDetail: {
		screen: WishDetail,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params.title,
			headerLeft:	<Button
				onPress={() => navigation.dispatch(backto())}
				title="BACK"
			/>,
			headerStyle: style.header,
			headerTitleStyle: style.headerTitle,
		}),
	},
});
