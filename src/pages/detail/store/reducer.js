import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    title: fromJS(''),
    content: fromJS(''),
    timestamp: 0,
    liked: false,
    date: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_ARTICLE_DATA:
            return state.merge({
                title: action.title,
                content: action.content,
                timestamp: action.timestamp,
                date: action.date
            });
        case constants.CHECK_LIKE:
            return state.set('like', action.like);
        case constants.CHANGE_LIKE:
            return state.set('like', action.like);
        default:
            return state;
    }
}