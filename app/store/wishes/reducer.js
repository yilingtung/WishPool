import * as types from './actionTypes';

const initialState = {
	list: [],
	group: {},
	isFetching: false,
	error: undefined,
};
const group = {};
let list = [];

export default function (state = initialState, action) {
	switch (action.type) {
		case types.FETCH_WISHES_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.FETCH_WISHES_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.error,
			});
		case types.FETCH_WISHES:
			action.wishes.forEach(el => {
				list = [el.id, ...list];
				group[el.id] = el;
			});
			return Object.assign({}, state, {
				isFetching: false,
				list,
				group,
			});
		default:
			return state;
	}
}
