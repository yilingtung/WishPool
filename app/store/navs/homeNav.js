import { NavigationActions } from 'react-navigation';
import * as types from './actionTypes';
import HomeStack from '../../config/routes/HomeStack/navigationConfiguration';

export default function (state = null, action) {
	let nextState;
	switch (action.type) {
		case types.HOME_NAV_NAVIGATE:
			nextState = HomeStack.router.getStateForAction(
				NavigationActions.navigate({ routeName: action.routeName, params: action.params }),
				state,
			);
			break;
		case types.HOME_NAV_BACK_TO:
			nextState = HomeStack.router.getStateForAction(
				NavigationActions.back(),
				state,
			);
			break;
		default:
			nextState = HomeStack.router.getStateForAction(action, state);
			break;
	}
	return nextState || state;
}
