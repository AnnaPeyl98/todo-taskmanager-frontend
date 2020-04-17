import {combineReducers} from 'redux';

import taskListReducer from './taskList/taskListReducer';
import userReducer from "./user/userReducer";
export default (state = {}, action) => {
    return combineReducers({
        taskListReducer,
        userReducer
    })(state, action)
};