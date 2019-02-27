import axios from 'axios';
import * as constants from './constants'
import {fromJS} from "immutable";

const initHomeDataAction = (resp) => {
    return {
        type: constants.INIT_HOME_DATA_ACTION,
        topicList: fromJS(resp.data.data.topicList),
        recommendList: fromJS(resp.data.data.recommendList),
        articleList: fromJS(resp.data.data.articleList)
    }

};

export const changeTopBtnAction = (visibility) => {
    return {
        type: constants.CHANGE_TOP_BUTTON_VISIBILITY,
        visibility
    }

};

export const getHomeJson = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((resp) => {
            dispatch(initHomeDataAction(resp));
        }).catch(() => {
            console.log('api error');
        })
    }
};

