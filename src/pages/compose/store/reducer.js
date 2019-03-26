import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_CONTENT:
            return state.set('content', action.content);
        case constants.CHANGE_TITLE:
            return state.set('title', action.title);
        default:
            return state;
    }
}