import * as responseTypes from '../../actions/tasksList/actionTypes';

const initialState = {
    tasks: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case responseTypes.GET_TASK_LIST_SUCCESS: {
            return {
                ...state,
                tasks: action.tasks === undefined ? [] : action.tasks,
                error: null
            }
        }
        case responseTypes.GET_TASK_LIST_ERROR: {
            return {
                ...state,
                tasks: [],
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}