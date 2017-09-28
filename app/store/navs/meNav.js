import { NavigationActions } from 'react-navigation';
import * as types from './actionTypes';
import MeStack from '../../config/routes/MeStack/navigationConfiguration';

export default function (state = null, action) {
	let nextState;
	switch (action.type) {
		case types.ME_NAV_NAVIGATE:
			nextState = MeStack.router.getStateForAction(
				NavigationActions.navigate({ routeName: action.routeName, params: action.params }),
				state,
			);
			break;
		case types.ME_NAV_BACK_TO:
			nextState = MeStack.router.getStateForAction(
				NavigationActions.back(),
				state,
			);
			break;
		default:
			nextState = MeStack.router.getStateForAction(action, state);
			break;
	}
	return nextState || state;
}
