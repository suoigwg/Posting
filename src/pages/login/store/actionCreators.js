import axios from 'axios';
import * as constants from './constants'
import {message} from "antd";

const loginSuccessAction = (data) => {
    return {
        type: constants.LOGIN,
        data,
        login: true
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
        axios.post(process.env.REACT_APP_API_ROOT + 'login', {
            username,
            password
        }, {withCredentials: true}).then((resp) => {
            dispatch(loginSuccessAction(resp.data))
        }).catch(() => {
            message.error("登录信息错误")
        })
    }
};