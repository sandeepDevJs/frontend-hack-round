import {
	POST_COMPANY_DATA_REQUEST,
	POST_COMPANY_DATA_SUCCESS,
	POST_COMPANY_DATA_FAIL,
	PUT_COMPANY_DATA_REQUEST,
	PUT_COMPANY_DATA_SUCCESS,
	PUT_COMPANY_DATA_FAIL,
	GET_COMPANY_DATA_REQUEST,
	GET_COMPANY_DATA_SUCCESS,
	GET_COMPANY_DATA_FAIL,
	GET_COMPANY_DATA_BY_ID_REQUEST,
	GET_COMPANY_DATA_BY_ID_SUCCESS,
	GET_COMPANY_DATA_BY_ID_FAIL,
} from "../constants/companyConstants";

import {
	postCompDataApi,
	putCompDataApi,
	getCompDataApi,
} from "../apis/companyAPIs";

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

export const getCompDataAction = () => async (dispatch) => {
	dispatch({ type: GET_COMPANY_DATA_REQUEST });
	try {
		let { data } = await getCompDataApi();
		dispatch({ type: GET_COMPANY_DATA_SUCCESS, payload: data.data });
	} catch (err) {
		dispatch({
			type: GET_COMPANY_DATA_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const getCompDataByIdAction = (id) => async (dispatch) => {
	dispatch({ type: GET_COMPANY_DATA_BY_ID_REQUEST });
	try {
		let { data } = await getCompDataApi(id);
		dispatch({ type: GET_COMPANY_DATA_BY_ID_SUCCESS, payload: data.data });
	} catch (err) {
		dispatch({
			type: GET_COMPANY_DATA_BY_ID_FAIL,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
