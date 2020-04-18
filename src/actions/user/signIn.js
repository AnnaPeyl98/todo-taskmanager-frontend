import {post} from "../../fetcher/fetcher";
import {AUTHORIZE_FAIL, AUTHORIZE_SUCCESS} from "./actionTypes";

export default function signIn(username, password) {
    return dispatch => {
        const userData = {
            username: username,
            password: password
        };

        return post('http://localhost:8080/signin',
            JSON.stringify(userData), null)
            .then((response) => {
                const token = response.token;
                localStorage.setItem('jwt-token', token);

                dispatch({
                    type: AUTHORIZE_SUCCESS,
                    error: null
                })
            })
            .catch((error) => {
                console.log(error)
                dispatch({
                    type: AUTHORIZE_FAIL,
                    error: error
                })
            })
    }
}