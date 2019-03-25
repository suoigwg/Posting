import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    login: false,
    hideHeader: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOGIN:
            return state.set('login', action.login);
        case constants.TOGGLE_HEADER:
            return state.set('hideHeader', action.visibility);
        default:
            return state;
    }
}