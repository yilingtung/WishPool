import * as types from './actionTypes';

export const navigate = payload => ({
	type: types.NAVIGATE,
	payload,
});

export const backto = () => ({
	type: types.BACK_TO,
});
