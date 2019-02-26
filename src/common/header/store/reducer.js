import * as constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused:false,
    list:[]
});

export default (state = defaultState, action)=>{
    if (action.type === constants.SEARCH_BAR_FOCUSED){
        return state.set('focused', true);
    }

    if (action.type === constants.SEARCH_BAR_BLUR){
        return state.set('focused', false);
    }

    if (action.type === constants.GET_HOT_TOPICS){
        return state.set('list', action.data)
    }
    return state
}