import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import User from './modules/user';
import Post from './modules/post';

// reducer를 뭉친것을 rootReducer 라고 정해준다.
// reducer는 여러개 있을 수 있으므로 하나로 뭉쳐주는 작업이다.
const rootReducer = combineReducers({ User, Post });
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);


const store = createStore(rootReducer, enhancer);

export default store;