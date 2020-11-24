import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { adReducer } from "./adReducers";

const reducer = combineReducers({
    adList: adReducer
});

const initialState = {
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;