/**
 * Created by Denis on 23.04.2018.
 */
import {combineReducers} from 'redux';
import authority from "./authorityReducer"

const appReducer = combineReducers({
    authority
});

export default (state, action) => {
    return appReducer(state, action);
}