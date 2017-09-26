import { StackNavigator } from 'react-navigation';
import Me from '../../../screens/Me';
import UserDetail from '../../../screens/UserDetail';

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
		}),
	},
};

export default StackNavigator(routeConfiguration);
