import * as types from './actionTypes';
import wishes from '../../data.json';

const initialState = wishes;

export default function (state = initialState, action) {
	switch (action.type) {
		case types.ADD_WISH:
			return {
				...state,
				data: [action.newWish, ...state.data],
			};
		default:
			return state;
	}
}
