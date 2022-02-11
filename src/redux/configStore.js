import { createStore, combineReducers } from 'redux';
import user from './modules/user';

// reducer를 뭉친것을 rootReducer 라고 정해준다.
// reducer는 여러개 있을 수 있으므로 하나로 뭉쳐주는 작업이다.
const rootReducer = combineReducers({ user });

// 뭉쳐진 리듀서들을 넣어서 스토어를 만들어준다.
// 리듀서뿐만 아니라 미들웨어나 필요한 것들도 같이 넣을 수 있다.
const store = createStore(rootReducer);

export default store;