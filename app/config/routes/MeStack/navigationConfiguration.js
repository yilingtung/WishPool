import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Me from '../../../screens/Me';
import UserDetail from '../../../screens/UserDetail';
import { meNavBackto } from '../../../store/navs/actions';
import style from '../style';

export default StackNavigator({
	Me: {
		screen: Me,
		navigationOptions: {
			title: 'Me',
			headerStyle: style.header,
			headerTitleStyle: style.headerTitle,
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
			headerStyle: style.header,
			headerTitleStyle: style.headerTitle,
		}),
	},
});
