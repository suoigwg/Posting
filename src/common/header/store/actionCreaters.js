import * as constants from './constants'
import axios from 'axios'
import {fromJS} from "immutable";

const getHotTopicsAction = (data) => {
    return {
        type: constants.GET_HOT_TOPICS,
        data: fromJS(data),
        totalPage: Math.ceil(data.length / constants.TOPICS_PER_PAGE)
    }
};


export const searchBarFocusAction = ()=>{
    return {
        type: constants.SEARCH_BAR_FOCUSED
    }
};

export const searchBarBlurAction = ()=>{
    return {
        type: constants.SEARCH_BAR_BLUR
    }
};

export const hotTopicMouseInAction = () => {
    return {
        type: constants.HOT_TOPIC_MOUSE_IN
    }
};

export const hotTopicMouseOutAction = () => {
    return {
        type: constants.HOT_TOPIC_MOUSE_OUT
    }
};

export const switchPageAction = (nextPage) => {
    return {
        type: constants.SWITCH_PAGE,
        nextPage
    }
};


export const getHotTopics = ()=>{
    return (dispatch)=>{
        axios.get('/api/hotlist.json').then((response)=>{
            dispatch(getHotTopicsAction(response.data.data));
        }).catch(()=>{
            console.log("获取数据失败")
        })
    }
};