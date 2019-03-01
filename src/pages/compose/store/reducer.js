import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
    showCreateDir: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.TOGGLE_DIRECTORY:
            return state.set('showCreateDir', action.show);
        default:
            return state;
    }
}