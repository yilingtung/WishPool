import React from 'react';
import {
	TouchableOpacity,
	Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Pool from '../../../screens/Pool';
import WishDetail from '../../../screens/WishDetail';
import { poolNavBackto } from '../../../store/navs/actions';
import style from '../style';

const iconBackWhite = require('../../../public/images/icon_back_white.png');

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
			headerLeft: <TouchableOpacity onPress={() => navigation.dispatch(poolNavBackto())}>
				<Image style={style.headerIcon} source={iconBackWhite} />
			</TouchableOpacity>,
			headerStyle: style.headerTransparent,
			headerTitleStyle: style.headerTitle,
		}),
	},
}, {
	initialRouteName: 'Pool',
});
