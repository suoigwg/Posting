import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    title: fromJS(''),
    content: fromJS('')
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_ARTICLE_DATA:
            return state.merge({
                title: action.title,
                content: action.content
            });
        default:
            return state;
    }
}