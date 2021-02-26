import {
	POST_COMPANY_DATA_REQUEST,
	POST_COMPANY_DATA_SUCCESS,
	POST_COMPANY_DATA_FAIL,
	POST_COMPANY_DATA_RESET,
	PUT_COMPANY_DATA_REQUEST,
	PUT_COMPANY_DATA_SUCCESS,
	PUT_COMPANY_DATA_FAIL,
	PUT_COMPANY_DATA_RESET,
	GET_COMPANY_DATA_REQUEST,
	GET_COMPANY_DATA_SUCCESS,
	GET_COMPANY_DATA_FAIL,
	GET_COMPANY_DATA_BY_ID_REQUEST,
	GET_COMPANY_DATA_BY_ID_SUCCESS,
	GET_COMPANY_DATA_BY_ID_FAIL,
} from "../constants/companyConstants";

export const postCompDataReducer = (state = {}, action) => {
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
			return state;
	}
};

export const putCompDataReducer = (state = {}, action) => {
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
			return state;
	}
};

export const getCompDataReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_COMPANY_DATA_REQUEST:
			return { loading: true };

		case GET_COMPANY_DATA_SUCCESS:
			return { loading: false, data: action.payload };

		case GET_COMPANY_DATA_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const getCompDataByIdReducer = (
	state = { data: { _id: 0 } },
	action
) => {
	switch (action.type) {
		case GET_COMPANY_DATA_BY_ID_REQUEST:
			return { loading: true };

		case GET_COMPANY_DATA_BY_ID_SUCCESS:
			return { loading: false, data: action.payload };

		case GET_COMPANY_DATA_BY_ID_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const getCity = (state = [], action) => {
	switch (action.type) {
		case "Maharashtra":
			return [
				{ key: "Mumbai", value: "Mumbai" },
				{ key: "Navi Mumbai", value: "Navi Mumbai" },
				{ key: "Pune", value: "Pune" },
			];

		case "Delhi":
			return [
				{ key: "Ghaziabad", value: "Ghaziabad" },
				{ key: "Agra", value: "Agra" },
				{ key: "Faridabad", value: "Faridabad" },
			];

		case "UP":
			return [
				{ key: "Pryagraj", value: "Pryagraj" },
				{ key: "Noida", value: "Noida" },
				{ key: "varanasi", value: "varanasi" },
			];

		default:
			return state;
	}
};
