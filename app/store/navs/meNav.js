import MeStack from '../../config/routes/MeNavigation/MeStack';

export default (state = null, action) => {
	const nextState = MeStack.router.getStateForAction(action, state);
	return nextState || state;
};
