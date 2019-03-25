import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    username: "username",
    following: 1,
    follower: 0,
    wordCount: 199,
    articleCount: 1,
    avatarUrl: "https://upload.jianshu.io/users/upload_avatars/12986775/99342bcc-e386-4e47-b57d-983b0664d04f?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
    timeline: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_USER_PROFILE:
            console.log(action.data);
            return state.merge(action.data);
        case constants.LOAD_USER_TIMELINE:
            return state.set('timeline', action.timeline);
        default:
            return state;
    }
}