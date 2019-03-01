import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    showCreateDir: false,
    directory: fromJS([]),
    article: fromJS([]),
    currentTitle: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.TOGGLE_DIRECTORY:
            return state.set('showCreateDir', action.show);
        case constants.NEW_ARTICLE:
            const newArticles = state.get('article').toJS();
            newArticles.push({
                content: action.content,
                title: action.title
            });
            return state.set('article', fromJS(newArticles));
        case constants.CHANGE_TITLE:
            const newArticle = state.get('article').update(action.activeIndex, item => item.set('title', action.title));
            return state.set('article', newArticle);
        case constants.CREATE_DIR:
            const newDirList = state.get('directory').toJS();
            newDirList.push(action.newDirName);
            return state.set('directory', fromJS(newDirList));
        default:
            return state;
    }
}