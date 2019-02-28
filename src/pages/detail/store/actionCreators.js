import axios from 'axios';
import * as constants from './constants'
import {fromJS} from "immutable";


const loadArticleAction = (resp) => {
    return {
        type: constants.LOAD_ARTICLE_DATA,
        title: fromJS(resp.data.data.title),
        content: fromJS(resp.data.data.content)
    }
}

export const loadArticle = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((resp) => {
            dispatch(loadArticleAction(resp))
        }).catch(() => {
            console.log('detail api error')
        })
    }
}