import * as types from './actionTypes';

export const navigate = (routeName, params) => ({
	type: types.NAVIGATE,
	routeName,
	params,
});

export const backto = () => ({
	type: types.BACK_TO,
});

export const poolNavNavigate = (routeName, params) => ({
	type: types.POOL_NAV_NAVIGATE,
	routeName,
	params,
});

export const poolNavBackto = () => ({
	type: types.POOL_NAV_BACK_TO,
});
