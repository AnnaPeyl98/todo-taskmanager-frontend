import {postUser} from "../../fetcher/fetcher";

import {REGISTER_SUCCESS, REGISTER_FAIL} from "./actionTypes";

export default function register(username, password) {
    return dispatch => {
        const userData = {
            username: username,
            password: password
        };

        return postUser('http://localhost:8080/signup', JSON.stringify(userData), null)
            .then((response) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    error: null
                })
            }).catch((error) => {
                dispatch({
                    type: REGISTER_FAIL,
                    error: error
                })
            })
    }
}