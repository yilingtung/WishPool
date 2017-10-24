import { StackNavigator } from 'react-navigation';
import Home from '../../../screens/Home';
import style from '../style';

export default StackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'Home',
			headerStyle: style.header,
			headerTitleStyle: style.headerTitle,
		},
	},
});
