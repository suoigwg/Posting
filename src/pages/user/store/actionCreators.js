import axios from 'axios';
import * as constants from './constants'

export const loadUserList = () => {
    return (dispatch) => {
        axios.get(process.env.REACT_APP_API_ROOT + 'users').then((resp) => {
            dispatch({
                type: constants.LOAD_USER_LIST,
                userlist: resp.data,
            })
        }).catch(() => console.log("加载用户列表失败"));
    }

}