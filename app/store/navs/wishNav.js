import { NavigationActions } from 'react-navigation';
import * as types from './actionTypes';
import WishStack from '../../config/routes/WishStack/navigationConfiguration';

export default function (state = null, action) {
	let nextState;
	switch (action.type) {
		case types.POOL_NAV_NAVIGATE:
			nextState = WishStack.router.getStateForAction(
				NavigationActions.navigate({ routeName: action.routeName, params: action.params }),
				state,
			);
			break;
		case types.POOL_NAV_BACK_TO:
			nextState = WishStack.router.getStateForAction(
				NavigationActions.back(),
				state,
			);
			break;
		default:
			nextState = WishStack.router.getStateForAction(action, state);
			break;
	}
	return nextState || state;
}
