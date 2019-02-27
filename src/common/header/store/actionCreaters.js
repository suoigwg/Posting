import * as constants from './constants'
import axios from 'axios'
import {fromJS} from "immutable";

const getHotTopicsAction = (data) => {
    return {
        type: constants.GET_HOT_TOPICS,
        data: fromJS(data)
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



export const getHotTopics = ()=>{
    return (dispatch)=>{
        axios.get('/api/hotlist.json').then((response)=>{
            dispatch(getHotTopicsAction(response.data.data));
        }).catch(()=>{
            console.log("获取数据失败")
        })
    }
};