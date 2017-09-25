import * as types from './actionTypes';

export const addWish = newWish => ({
	type: types.ADD_WISH,
	newWish,
});
