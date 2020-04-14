import {get} from '../../fetcher/fetcher';

import {GET_TASK_LIST_ERROR, GET_TASK_LIST_SUCCESS} from "./actionTypes";
export default function getTaskList(status) {
    return dispatch => {
        return get(`http://localhost:8080/tasks?status=${status}`)
            .then(response => {
                dispatch({
                    type: GET_TASK_LIST_SUCCESS,
                    tasks: response.tasks
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_TASK_LIST_ERROR,
                    error: error
                })
            })
    }
}