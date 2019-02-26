import {combineReducers} from "redux-immutable";
import headerReducer from "../common/header/store/reducer"

export const reducer =  combineReducers({
    header: headerReducer
});