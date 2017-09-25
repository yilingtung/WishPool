import { combineReducers } from 'redux';
import wishes from './wishes/reducer';

const reducers = combineReducers({
	wishes,
});

export default reducers;
