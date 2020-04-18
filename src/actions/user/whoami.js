import {get} from "../../fetcher/fetcher";

import {AUTHENTICATE_FAIL, AUTHENTICATE_SUCCESS} from "./actionTypes";

export default function whoami() {
    return (dispatch) => {
        const token = localStorage.getItem('jwt-token');
        return get('http://localhost:8080/whoami', token)
            .then((response) => {
                dispatch({
                    type: AUTHENTICATE_SUCCESS,
                    username: response.username,
                    error: null
                });
            })
            .catch((error) => {
                localStorage.removeItem('jwt-token');
                dispatch({
                    type: AUTHENTICATE_FAIL,
                    error: error
                });
            })
    }
}