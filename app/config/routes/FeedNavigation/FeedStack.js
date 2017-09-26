import { StackNavigator } from 'react-navigation';
import Feed from '../../../screens/Feed';
import WishDetail from '../../../screens/WishDetail';

const FeedStack = StackNavigator({
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
		}),
	},
});

export default FeedStack;
