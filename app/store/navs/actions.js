import * as types from './actionTypes';

export const navigate = payload => ({
	type: types.NAVIGATE,
	payload,
});

export const backto = () => ({
	type: types.BACK_TO,
});

export const meNavNavigate = payload => ({
	type: types.ME_NAV_NAVIGATE,
	payload,
});

export const meNavBackto = () => ({
	type: types.ME_NAV_BACK_TO,
});
