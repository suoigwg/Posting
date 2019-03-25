import axios from 'axios';
import * as constants from './constants'

const loadProfileAction = (data) => {
    const {username, following, wordCount, articleCount, avatarUrl, follower} = data;
    return {
        type: constants.LOAD_USER_PROFILE,
        data: {
            username,
            following,
            wordCount,
            articleCount,
            avatarUrl,
            follower
        }
    }
}

export const loadUserProfile = (userid) => {
    return (dispatch) => {
        axios.get('/api/profile.json').then((resp) => {
            dispatch(loadProfileAction(resp.data))
        })
    }
}