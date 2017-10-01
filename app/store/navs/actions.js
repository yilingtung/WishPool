import * as types from './actionTypes';

export const navigate = (routeName, params) => ({
	type: types.NAVIGATE,
	routeName,
	params,
});

export const backto = () => ({
	type: types.BACK_TO,
});

export const meNavNavigate = (routeName, params) => ({
	type: types.ME_NAV_NAVIGATE,
	routeName,
	params,
});

export const meNavBackto = () => ({
	type: types.ME_NAV_BACK_TO,
});
