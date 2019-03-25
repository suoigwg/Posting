import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    username: "username",
    following: 1,
    follower: 0,
    wordCount: 199,
    articleCount: 1,
    avatarUrl: "https://upload.jianshu.io/users/upload_avatars/12986775/99342bcc-e386-4e47-b57d-983b0664d04f?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"

});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_USER_PROFILE:
            return state.merge(action.data);
        default:
            return state;
    }
}