import { NavigationActions } from 'react-navigation';
import * as types from './actionTypes';
import PoolStack from '../../config/routes/PoolStack/navigationConfiguration';

export default function (state = null, action) {
	let nextState;
	switch (action.type) {
		case types.POOL_NAV_NAVIGATE:
			nextState = PoolStack.router.getStateForAction(
				NavigationActions.navigate({ routeName: action.routeName, params: action.params }),
				state,
			);
			break;
		case types.POOL_NAV_BACK_TO:
			nextState = PoolStack.router.getStateForAction(
				NavigationActions.back(),
				state,
			);
			break;
		default:
			nextState = PoolStack.router.getStateForAction(action, state);
			break;
	}
	return nextState || state;
}
