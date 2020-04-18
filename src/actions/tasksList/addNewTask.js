import {post} from '../../fetcher/fetcher';

import {ADD_TASK_ERROR, ADD_TASK_SUCCESS} from "./actionTypes";
export default function addNewTask(taskData) {
    return dispatch => {
        const token = localStorage.getItem('jwt-token');
        return post(`http://localhost:8080/tasks/`, JSON.stringify(taskData), token)
            .then((response) => {
                dispatch({
                    type: ADD_TASK_SUCCESS,
                    error: null
                })
            })
            .catch((error) => {
                dispatch({
                    type: ADD_TASK_ERROR,
                    error: error
                })
            })
    }
}