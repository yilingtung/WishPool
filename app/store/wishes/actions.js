import axios from 'axios';
import * as types from './actionTypes';
import { apiDomain } from '../../../appConfig';

export const fetchWishes = () =>
	dispatch => {
		dispatch({
			type: types.FETCH_WISHES_REQUEST,
		});
		return axios.get(`${apiDomain}/api/wishes`)
			.then(response => {
				dispatch({
					type: types.FETCH_WISHES,
					wishes: response.data,
				});
			}).catch(error => {
				dispatch({
					type: types.FETCH_WISHES_FAILURE,
					error,
				});
			});
	};
