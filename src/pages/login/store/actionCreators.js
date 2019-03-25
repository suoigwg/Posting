import axios from 'axios';
import * as constants from './constants'
import {fromJS} from "immutable";


const loginSuccessAction = (data) => {
    return {
        type: constants.LOGIN,
        data,
        login: true
    }
};


export const logout = () => {
    return (dispatch) => {
        dispatch(loginSuccessAction(false));
    }
};

export const toggleHeader = (visibility) => {
    return {
        type: constants.TOGGLE_HEADER,
        visibility
    }
};


export const authenticate = (username, password) => {
    return (dispatch) => {
        console.log(username, password);
        axios.post('http://localhost:8000/login', {username, password}).then((resp) => {
            dispatch(loginSuccessAction(resp.data))
        }).catch(() => {
            console.log('Wrong credentials')
        })
    }
};