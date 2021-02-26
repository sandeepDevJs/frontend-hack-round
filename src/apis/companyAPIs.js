import axios from "axios";

const API_PREFIX = "http://localhost:4000/api";

const config = {
	header: {
		"Content-Type": "application/json",
	},
};

export const postCompDataApi = (data) =>
	axios.post(`${API_PREFIX}/companies/`, data, config);

export const putCompDataApi = (data, id) =>
	axios.put(`${API_PREFIX}/companies/${id}`, data, config);

export const getCompDataApi = (id = null) => {
	return id
		? axios.get(`${API_PREFIX}/companies/${id}`)
		: axios.get(`${API_PREFIX}/companies/`);
};
