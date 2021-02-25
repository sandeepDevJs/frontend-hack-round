import {
	POST_COMPANY_DATA_REQUEST,
	POST_COMPANY_DATA_SUCCESS,
	POST_COMPANY_DATA_FAIL,
} from "../constants/companyConstants";

export const postCompDataReducer = (state, action) => {
	switch (action.type) {
		case POST_COMPANY_DATA_REQUEST:
			return { loading: true };

		case POST_COMPANY_DATA_SUCCESS:
			return { loading: false, success: true };

		case POST_COMPANY_DATA_FAIL:
			return { loading: false, error: action.payload };

		default:
			return {};
	}
};
