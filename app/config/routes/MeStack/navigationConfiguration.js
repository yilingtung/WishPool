import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Pool from '../../../screens/Pool';
import UserDetail from '../../../screens/UserDetail';
import { meNavBackto } from '../../../store/navs/actions';
import style from '../style';

export default StackNavigator({
	// can't change to Pool !!! Don't know why .
	Me: {
		screen: Pool,
		headerMode: 'none',
		navigationOptions: {
			header: null,
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
