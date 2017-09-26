import FeedStack from '../config/routes/FeedNavigation/FeedStack';

export default (state = null, action) => {
	const nextState = FeedStack.router.getStateForAction(action, state);
	return nextState || state;
};
