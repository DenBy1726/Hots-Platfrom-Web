/**
 * Created by Denis on 26.04.2018.
 */
import {
    LOAD_START_HERO_FULL, LOAD_END_HERO_FULL, LOAD_ERROR_HERO_FULL,
    LOAD_END_DICTIONARY
} from "../constants/ActionTypes";
const initialState = {
    difficulty: [],
    franchise: [],
    heroSubgroup: [],
    heroGroup: [],
    gameMode: [],
    map: [],
    resourceType: [],
};

export default function heroReducer(state = {...initialState}, action) {
    switch (action.type) {
        case LOAD_END_DICTIONARY:
            return {...state,...action.payload};
        default:
            return state;
    }
}