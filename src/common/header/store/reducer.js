import * as constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused:false,
    list:[]
});

export default (state = defaultState, action)=>{
    switch (action.type) {
        case constants.SEARCH_BAR_FOCUSED:
            return state.set('focused', true);
        case constants.SEARCH_BAR_BLUR:
            return state.set('focused', false);
        case constants.GET_HOT_TOPICS:
            return state.set('list', action.data);
        default:
            return state;
    }
}