import axios from 'axios';
import * as constants from './constants'


const loadArticleAction = (data) => {
    const {title, content, timestamp, date, author} = data;
    return {
        type: constants.LOAD_ARTICLE_DATA,
        title,
        content,
        timestamp,
        date,
        author
    }
};

export const loadArticle = (id) => {
    return (dispatch) => {
        axios.get(process.env.REACT_APP_API_ROOT + 'article/' + id).then((resp) => {
            dispatch(loadArticleAction(resp.data[0]))
        }).catch((err) => {
            console.log('获取文章API失败')
        });
    }
};

export const checkIfUserLike = (user, article) => {
    return (dispatch) => {
        axios.post(process.env.REACT_APP_API_ROOT + 'checklike', {user, article}).then((resp) => {
            dispatch({
                type: constants.CHECK_LIKE,
                like: resp.data.like
            })
        }).catch((err) => {
            console.log('获取点赞信息失败');
        });
    }
}

export const changeLike = (like) => {
    return {
        type: constants.CHANGE_LIKE,
        like
    }
};