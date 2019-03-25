import {combineReducers} from "redux-immutable";
import headerReducer from "../common/header/store/reducer"
import homeReducer from "../pages/home/store/reducer"
import detailReducer from "../pages/detail/store/reducer"
import loginReducer from "../pages/login/store/reducer";
import composerReducer from "../pages/compose/store/reducer";
import profileReducer from "../pages/profile/store/reducer";

export const reducer =  combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer,
    composer: composerReducer,
    profile: profileReducer
});