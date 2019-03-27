import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    userlist: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_USER_LIST:
            return state.set('userlist', action.userlist);
        default:
            return state;
    }
}