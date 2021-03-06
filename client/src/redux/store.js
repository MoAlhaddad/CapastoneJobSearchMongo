import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { jobsReducer } from "./reducers/jobsReducer";
import { loaderReducer } from "./reducers/loaderReducer";


const rootReducer = combineReducers({
  jobsReducer: jobsReducer,
  loaderReducer : loaderReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
