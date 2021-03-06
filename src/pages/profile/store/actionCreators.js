import axios from 'axios';
import * as constants from './constants'

const loadProfileAction = (data) => {
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
        axios.get(process.env.REACT_APP_API_ROOT + 'user/' + userid).then((resp) => {
            const userdata = resp.data;
            axios.get(process.env.REACT_APP_API_ROOT + 'publish/' + userid).then((resp) => {
                userdata['timeline'] = resp.data;
                dispatch(loadProfileAction(userdata))
            })
        })
    }
};


export const loadUserActivity = (userid) => {
    return (dispatch) => {
        axios.get(process.env.REACT_APP_API_ROOT + 'likes/' + userid).then((resp) => {
            dispatch(loadActivityAction(resp.data));
        }).catch(() => console.log("无法加载用户活动列表"));
    }
};

export const loadPublishActivity = (userid) => {
    return (dispatch) => {
        axios.get(process.env.REACT_APP_API_ROOT + 'publish/' + userid).then((resp) => {
            dispatch(loadActivityAction(resp.data));
        }).catch(() => console.log("无法加载用户活动列表"));
    }
};

export const loadFollowingUser = (userid) => {
    return (dispatch) => {
        axios.get(process.env.REACT_APP_API_ROOT + 'following/' + userid).then((resp) => {
            dispatch({
                type: constants.LOAD_FOLLOWING,
                data: resp.data,
            });
        }).catch(() => console.log("无法加载关注用户列表"));
    }
};

export const loadFollowerUser = (userid, currentUser) => {
    return (dispatch) => {
        axios.get(process.env.REACT_APP_API_ROOT + 'follower/' + userid).then((resp) => {
            dispatch({
                type: constants.LOAD_FOLLOWER,
                data: resp.data,
                currentUser
            });
        }).catch(() => console.log("无法加载粉丝列表"));
    }
};

export const changeFollowRelation = (relation) => {
    return {
        type: constants.CHANGE_RELATION,
        relation
    }
};