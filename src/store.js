import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
	postCompDataReducer,
	putCompDataReducer,
	getCompDataReducer,
	getCompDataByIdReducer,
	getCity,
} from "./reducers/companyReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];
const initialState = {};
const rootReducer = combineReducers({
	postCompData: postCompDataReducer,
	putCompData: putCompDataReducer,
	getCompData: getCompDataReducer,
	getCompDataById: getCompDataByIdReducer,
	getCity,
});

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
