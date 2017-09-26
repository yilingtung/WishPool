import { combineReducers } from 'redux';
import wishes from './wishes/reducer';
import navs from './navs/reducer';

const reducers = combineReducers({
	...navs,
	wishes,
});

export default reducers;
