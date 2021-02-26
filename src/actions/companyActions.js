import {
	POST_COMPANY_DATA_REQUEST,
	POST_COMPANY_DATA_SUCCESS,
	POST_COMPANY_DATA_FAIL,
	PUT_COMPANY_DATA_REQUEST,
	PUT_COMPANY_DATA_SUCCESS,
	PUT_COMPANY_DATA_FAIL,
} from "../constants/companyConstants";

import { postCompDataApi, putCompDataApi } from "../apis/companyAPIs";

export const postCompDataAction = (data) => async (dispatch) => {
	dispatch({ type: POST_COMPANY_DATA_REQUEST });
	try {
		await postCompDataApi(data);
		dispatch({ type: POST_COMPANY_DATA_SUCCESS });
	} catch (err) {
		dispatch({
			type: POST_COMPANY_DATA_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const putCompDataAction = (data, id) => async (dispatch) => {
	dispatch({ type: PUT_COMPANY_DATA_REQUEST });
	try {
		await putCompDataApi(data, id);
		dispatch({ type: PUT_COMPANY_DATA_SUCCESS });
	} catch (err) {
		dispatch({
			type: PUT_COMPANY_DATA_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
