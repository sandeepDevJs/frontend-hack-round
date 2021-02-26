import {
	POST_COMPANY_DATA_REQUEST,
	POST_COMPANY_DATA_SUCCESS,
	POST_COMPANY_DATA_FAIL,
	POST_COMPANY_DATA_RESET,
	PUT_COMPANY_DATA_REQUEST,
	PUT_COMPANY_DATA_SUCCESS,
	PUT_COMPANY_DATA_FAIL,
	PUT_COMPANY_DATA_RESET,
} from "../constants/companyConstants";

export const postCompDataReducer = (state, action) => {
	switch (action.type) {
		case POST_COMPANY_DATA_REQUEST:
			return { loading: true };

		case POST_COMPANY_DATA_SUCCESS:
			return { loading: false, success: true };

		case POST_COMPANY_DATA_FAIL:
			return { loading: false, error: action.payload };

		case POST_COMPANY_DATA_RESET:
			return {};

		default:
			return {};
	}
};

export const putCompDataReducer = (state, action) => {
	switch (action.type) {
		case PUT_COMPANY_DATA_REQUEST:
			return { loading: true };

		case PUT_COMPANY_DATA_SUCCESS:
			return { loading: false, success: true };

		case PUT_COMPANY_DATA_FAIL:
			return { loading: false, error: action.payload };

		case PUT_COMPANY_DATA_RESET:
			return {};

		default:
			return {};
	}
};
