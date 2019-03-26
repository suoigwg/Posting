import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    showTopButton: false,
    page: 2,
    authorList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.INIT_HOME_DATA_ACTION:
            console.log(action.articleList);
            return state.merge({
                articleList: action.articleList
            });
        case constants.CHANGE_TOP_BUTTON_VISIBILITY:
            return state.set('showTopButton', action.visibility);
        case constants.LOAD_MORE_DATA:
            console.log(action.page);
            return state.merge({
                articleList: state.get('articleList').concat(action.data),
                page: action.page + 1
            });
        case constants.LOAD_AUTHOR_DATA:
            return state.set("authorList", action.data);
        default:
            return state;
    }
}