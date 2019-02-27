import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    showTopButton: false,
    page: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.INIT_HOME_DATA_ACTION:
            return state.merge({
                topicList: action.topicList,
                articleList: action.articleList,
                recommendList: action.recommendList
            });
        case constants.CHANGE_TOP_BUTTON_VISIBILITY:
            return state.set('showTopButton', action.visibility);
        case constants.LOAD_MORE_DATA:
            return state.merge({
                articleList: state.get('articleList').concat(action.data),
                page: action.nextPage
            });
        default:
            return state;
    }
}