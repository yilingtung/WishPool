import * as types from './actionTypes';

export const poolNavNavigate = (routeName, params) => ({
	type: types.POOL_NAV_NAVIGATE,
	routeName,
	params,
});

export const poolNavBackto = () => ({
	type: types.POOL_NAV_BACK_TO,
});

export const wishNavNavigate = (routeName, params) => ({
	type: types.WISH_NAV_NAVIGATE,
	routeName,
	params,
});

export const wishNavBackto = () => ({
	type: types.WISH_NAV_BACK_TO,
});

export const homeNavNavigate = (routeName, params) => ({
	type: types.HOME_NAV_NAVIGATE,
	routeName,
	params,
});

export const homeNavBackto = () => ({
	type: types.HOME_NAV_BACK_TO,
});
