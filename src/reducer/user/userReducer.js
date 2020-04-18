import {REGISTER_FAIL, REGISTER_SUCCESS,AUTHENTICATE_FAIL,AUTHENTICATE_SUCCESS,AUTHORIZE_FAIL,AUTHORIZE_SUCCESS} from "../../actions/user/actionTypes";

const initialState = {
    isAuthorized: !!localStorage.getItem("jwt-token"),
    isRegistarated: false,
    error: null
};

export default (state = initialState, action) => {
console.log(action.type)
    switch (action.type) {
        case REGISTER_SUCCESS: {
            return {
                ...state,
                isRegistarated:true,
                error: null
            }
        }
        case REGISTER_FAIL: {
            return {
                ...state,
                isRegistarated:false,
                error: action.error
            }
        }

        case AUTHORIZE_SUCCESS: {
            return {
                ...state,
                isAuthorized: true,
                error: null
            }
        }
        case AUTHORIZE_FAIL: {
            return {
                ...state,
                isAuthorized: false,
                error: action.error
            }
        }

        case AUTHENTICATE_SUCCESS: {
            return {
                ...state,
                username: action.username,
                error: null
            }
        }
        case AUTHENTICATE_FAIL: {
            return {
                ...state,
                isAuthorized: false,
                error: action.error
            }
        }
        default: {
            return state
        }
    }
}