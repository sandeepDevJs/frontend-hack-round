import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
	postCompDataReducer,
	putCompDataReducer,
} from "./reducers/companyReducers";

const rootReducer = combineReducers({
	postCompData: postCompDataReducer,
	putCompData: putCompDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
