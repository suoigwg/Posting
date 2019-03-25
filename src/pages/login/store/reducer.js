import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    login: false,
    user: [],
    hideHeader: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOGIN:
            return state.merge({
                'user': action.data,
                'login': true
            });
        case constants.TOGGLE_HEADER:
            return state.set('hideHeader', action.visibility);
        default:
            return state;
    }
}