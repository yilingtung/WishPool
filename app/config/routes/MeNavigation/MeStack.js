import { StackNavigator } from 'react-navigation';
import Me from '../../../screens/Me';
import UserDetail from '../../../screens/UserDetail';

const MeStack = StackNavigator({
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
});

export default MeStack;
