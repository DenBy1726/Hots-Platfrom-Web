/**
 * Created by Denis on 07.05.2018.
 */


import {CHANGE_LITE_MODE} from "../constants/ActionTypes";
export const changeLiteMode = state =>{
    return {
        type: CHANGE_LITE_MODE,
        payload: state
    }
};
