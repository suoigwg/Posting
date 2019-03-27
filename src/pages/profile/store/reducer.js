import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    username: "username",
    following: 1,
    follower: 0,
    wordCount: 199,
    articleCount: 1,
    avatarUrl: "https://upload.jianshu.io/users/upload_avatars/12986775/99342bcc-e386-4e47-b57d-983b0664d04f?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
    timeline: [],
    followingList: [],
    followerList: [],
    relation: '未关注'
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_USER_PROFILE:
            return state.merge(action.data);
        case constants.LOAD_USER_TIMELINE:
            return state.set('timeline', action.timeline);
        case constants.LOAD_FOLLOWER:
            let relation = '未关注';
            for (let user of action.data) {
                if (action.currentUser === user.id) {
                    relation = '已关注';
                    break;
                }
            }
            return state.merge({
                followerList: action.data,
                relation
            });
        case constants.LOAD_FOLLOWING:
            return state.set("followingList", action.data);
        case constants.CHANGE_RELATION:
            return state.set("relation", action.relation);
        default:
            return state;
    }
}