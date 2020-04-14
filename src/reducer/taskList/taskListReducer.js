import * as responseTypes from '../../actions/tasksList/actionTypes';

const initialState = {
    taskList: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case responseTypes.GET_TASK_LIST_SUCCESS: {
            return {
                ...state,
                taskList: action.taskList,
                error: null
            }
        }
        case responseTypes.GET_TASK_LIST_ERROR: {
            return {
                ...state,
                taskList: [],
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}