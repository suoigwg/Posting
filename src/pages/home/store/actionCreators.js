import axios from 'axios';
import * as constants from './constants'

const initHomeDataAction = (data) => {
    // console.log(data);
    return {
        type: constants.INIT_HOME_DATA_ACTION,
        articleList: data
    }

};

const loadMoreDataAction = (data, page) => {
    return {
        type: constants.LOAD_MORE_DATA,
        page,
        data
    }
};

const loadAuthorAction = (data) => {
    return {
        type: constants.LOAD_AUTHOR_DATA,
        data: data
    }
}

export const changeTopBtnAction = (visibility) => {
    return {
        type: constants.CHANGE_TOP_BUTTON_VISIBILITY,
        visibility
    }

};

export const getHomeJson = () => {
    return (dispatch) => {
        axios.get('http://localhost:8000/article/list').then((resp) => {
            console.log(resp.data);
            dispatch(initHomeDataAction(resp.data));
        }).catch(() => {
            console.log('获取主页文章失败');
        })
    }
};

export const loadMoreData = (page) => {
    return (dispatch) => {
        axios.get(`http://localhost:8000/article/list/?page=${page}`).then((resp) => {
            dispatch(loadMoreDataAction(resp.data, page));
        }).catch(() => {
            console.log('api error');
        })
    }
};


export const loadAuthorData = () => {
    return (dispatch) => {
        axios.get('http://localhost:8000/users').then((resp) => {
            dispatch(loadAuthorAction(resp.data));
        }).catch(() => {
            console.log('获取推荐用户 api error');
        });

    }
};

