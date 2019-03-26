import axios from 'axios';
import * as constants from './constants'


const loadArticleAction = (data) => {
    const {title, content, timestamp} = data;
    return {
        type: constants.LOAD_ARTICLE_DATA,
        title,
        content,
        timestamp,
    }
};

export const loadArticle = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8000/article/' + id).then((resp) => {
            dispatch(loadArticleAction(resp.data))
        }).catch((err) => {
            console.log('获取文章API失败')
        });
    }
};