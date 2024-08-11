import { combineReducers } from "redux";

import storage from 'redux-persist/lib/storage'
// import counterReducer from "./slices/counterSlice";
import postReducer from "./slices/postSlice";
import usersReducer from "./slices/usersSlice";

const rootPersistConfig = {
    key: 'root',
    storage,
    prefix: 'redux-',
}

const rootReducer = combineReducers({
    // counter: counterReducer,
    posts: postReducer,
    users: usersReducer,
});

export { rootPersistConfig, rootReducer };

