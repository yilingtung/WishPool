import MeStack from '../../config/routes/MeStack/navigationConfiguration';

export default (state = null, action) => {
	const nextState = MeStack.router.getStateForAction(action, state);
	return nextState || state;
};
