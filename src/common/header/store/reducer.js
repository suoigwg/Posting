import * as constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused:false,
    list: [],
    mouseIn: false,
    currentPage: 0,
    totalPage: 0,
});

export default (state = defaultState, action)=>{
    switch (action.type) {
        case constants.SEARCH_BAR_FOCUSED:
            return state.set('focused', true);
        case constants.SEARCH_BAR_BLUR:
            return state.set('focused', false);
        case constants.GET_HOT_TOPICS:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case constants.HOT_TOPIC_MOUSE_IN:
            return state.set('mouseIn', true);
        case constants.HOT_TOPIC_MOUSE_OUT:
            return state.set('mouseIn', false);
        case constants.SWITCH_PAGE:
            return state.set('currentPage', action.nextPage);
        default:
            return state;
    }
}