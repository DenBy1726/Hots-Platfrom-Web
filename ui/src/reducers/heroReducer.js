/**
 * Created by Denis on 26.04.2018.
 */
import {LOAD_START_HERO_FULL, LOAD_END_HERO_FULL, LOAD_ERROR_HERO_FULL} from "../constants/ActionTypes";
const initialState = {
    Details: [],
    Statistic: [],
    Hero: [],
    Clusters: [],
    WebExtension: []
};

export default function heroReducer(state = {...initialState}, action) {
    switch (action.type) {
        case LOAD_START_HERO_FULL:
            return {...state,loading:true};
        case LOAD_END_HERO_FULL:
            return {...state, ...action.payload,loading:false};
        case LOAD_ERROR_HERO_FULL:
            return {...state,loading:false};
        default:
            return state;
    }
}