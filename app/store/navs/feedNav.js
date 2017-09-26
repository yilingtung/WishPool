import FeedStack from '../../config/routes/FeedStack/navigationConfiguration';

export default (state = null, action) => {
	const nextState = FeedStack.router.getStateForAction(action, state);
	return nextState || state;
};
