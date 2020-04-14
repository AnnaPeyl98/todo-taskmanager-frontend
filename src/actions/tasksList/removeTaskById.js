import {remove} from "../../fetcher/fetcher";

import {REMOVE_TASK_ERROR, REMOVE_TASK_SUCCESS} from "./actionTypes";

export default function removeTaskById(id) {
    return dispatch => {
        return remove(`http://localhost:8080/tasks/${id}`)
            .then(response => {
                dispatch({
                    type: REMOVE_TASK_SUCCESS
                })
            })
            .catch(error => {
                dispatch({
                    type: REMOVE_TASK_ERROR,
                    error: error
                })
            })
    };
}