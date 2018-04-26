/**
 * Created by Denis on 26.04.2018.
 */
import {LOAD_START_AUTH, LOAD_END_AUTH, LOAD_ERROR_AUTH} from "../constants/ActionTypes";
const initialState = {
    principal: "0",
    role: ["ANONYMOUS"],
    name: "Guest",
    id: "0",
};

export default function authorityReducer(state = {...initialState}, action) {
    switch (action.type) {
        case LOAD_START_AUTH:
            return {...state};
        case LOAD_END_AUTH:
            if (action.payload === null || action.payload === undefined)
                return {...state};
            else
                return {...state, ...action.payload};
        case LOAD_ERROR_AUTH:
            return {...state};
        default:
            return state;
    }
}