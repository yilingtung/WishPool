import { NavigationActions } from 'react-navigation';
import * as types from './actionTypes';
import FeedStack from '../../config/routes/FeedStack/navigationConfiguration';

export default function (state = null, action) {
	let nextState;
	switch (action.type) {
		case types.NAVIGATE:
			console.log(action.params);
			nextState = FeedStack.router.getStateForAction(
				NavigationActions.navigate({ routeName: action.routeName, params: action.params }),
				state,
			);
			break;
		case types.BACK_TO:
			nextState = FeedStack.router.getStateForAction(
				NavigationActions.back(),
				state,
			);
			break;
		default:
			nextState = FeedStack.router.getStateForAction(action, state);
			break;
	}
	return nextState || state;
}
