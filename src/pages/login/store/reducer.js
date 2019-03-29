import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    login: false,
    user: [],
    hideHeader: false,
    userid: undefined,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOGIN:
            return state.merge({
                'user': action.data,
                'login': true,
                'userid': action.data.id,
            });
        default:
            return state;
    }
}