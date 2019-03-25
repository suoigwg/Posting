import axios from 'axios';
import * as constants from './constants'

const loadProfileAction = (data) => {
    console.log(data);
    const {timeline, username, following, wordCount, articleCount, avatarUrl, follower} = data;
    return {
        type: constants.LOAD_USER_PROFILE,
        data: {
            username,
            following,
            wordCount,
            articleCount,
            avatarUrl,
            follower,
            timeline
        }
    }
};

const loadActivityAction = (timeline) => {
    return {
        type: constants.LOAD_USER_TIMELINE,
        timeline
    }
};



export const loadUserProfile = (userid) => {
    return (dispatch) => {
        axios.get('/api/profile.json').then((resp) => {
            const userdata = resp.data;
            axios.get('/api/articleUpdate.json').then((resp) => {
                userdata['timeline'] = resp.data;
                dispatch(loadProfileAction(userdata))
            })
        })
    }
};


export const loadUserActivity = (userid) => {
    return (dispatch) => {
        axios.get('/api/activity.json').then((resp) => {
            dispatch(loadActivityAction(resp.data));
        }).catch(() => console.log("无法加载用户活动列表"));
    }
};

export const loadPublishActivity = (userid) => {
    return (dispatch) => {
        axios.get('/api/articleUpdate.json').then((resp) => {
            dispatch(loadActivityAction(resp.data));
        }).catch(() => console.log("无法加载用户活动列表"));
    }
};