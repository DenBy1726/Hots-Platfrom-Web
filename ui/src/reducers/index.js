/**
 * Created by Denis on 23.04.2018.
 */
import {combineReducers} from 'redux';
import authority from "./authorityReducer"
import heroes from "./heroReducer"
import dictionary from "./dictionaryReducer"

const appReducer = combineReducers({
    authority,heroes,dictionary
});

export default (state, action) => {
    return appReducer(state, action);
}