import {patch} from "../../fetcher/fetcher";

import {UPDATE_TASK_ERROR, UPDATE_TASK_SUCCESS} from "./actionTypes";
export default function updateTaskById(id, updatedTask) {
    return dispatch => {
        return patch(`http://localhost:8080/tasks/${id}`, updatedTask)
            .then((response) => {
                dispatch({
                    type: UPDATE_TASK_SUCCESS
                })
            })
            .catch(error => {
                dispatch({
                    type: UPDATE_TASK_ERROR,
                    error: error
                })
            })
    }
}