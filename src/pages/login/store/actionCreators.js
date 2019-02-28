import axios from 'axios';
import * as constants from './constants'
import {fromJS} from "immutable";


const loginAction = (loginState) => {
    return {
        type: constants.LOGIN,
        login: loginState
    }
};


export const logout = () => {
    return (dispatch) => {
        dispatch(loginAction(false));
    }
};


export const authenticate = (username, password) => {
    return (dispatch) => {
        //此处应该为post
        axios.get('/api/login.json').then((resp) => {
            dispatch(loginAction(resp.data.data))
        }).catch(() => {
            console.log('auth api error')
        })
    }
};