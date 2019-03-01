import axios from 'axios';
import * as constants from './constants'
import {fromJS} from "immutable";

export const toggleDirectoryAction = (show) => {
    return {
        type: constants.TOGGLE_DIRECTORY,
        show
    }
};


