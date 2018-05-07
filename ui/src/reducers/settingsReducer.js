/**
 * Created by Denis on 26.04.2018.
 */
import {LOAD_START_AUTH, LOAD_END_AUTH, LOAD_ERROR_AUTH, CHANGE_LITE_MODE} from "../constants/ActionTypes";
let liteData = localStorage.getItem('lite');
const initialState = {
    liteMode: liteData !== null ? liteData : false
};

export default function settingsReducer(state = {...initialState}, action) {
    switch (action.type) {
        case CHANGE_LITE_MODE:
            localStorage.setItem('lite',action.payload);
            return {...state,liteMode : action.payload};
        default:
            return state;
    }
}