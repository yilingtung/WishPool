import { StackNavigator } from 'react-navigation';
import Wish from '../../../screens/Wish';
import style from '../style';

export default StackNavigator({
	Wish: {
		screen: Wish,
		navigationOptions: {
			title: 'Wish',
			headerStyle: style.header,
			headerTitleStyle: style.headerTitle,
		},
	},
});
