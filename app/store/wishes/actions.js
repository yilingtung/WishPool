import * as types from './actionTypes';
import axios from 'axios';
import { apiDomain } from '../../../appConfig';

export const fetchWishes = () => {
	return function(dispatch) {
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
	  }
};
