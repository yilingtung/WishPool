import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Pool from '../../../screens/Pool';
import WishDetail from '../../../screens/WishDetail';
import { poolNavBackto } from '../../../store/navs/actions';
import style from '../style';

export default StackNavigator({
	Pool: {
		screen: Pool,
		headerMode: 'none',
		navigationOptions: {
			header: null,
		},
	},
	WishDetail: {
		screen: WishDetail,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params.title,
			headerLeft:	<Button
				onPress={() => navigation.dispatch(poolNavBackto())}
				title="BACK"
			/>,
			headerStyle: style.header,
			headerTitleStyle: style.headerTitle,
		}),
	},
});
