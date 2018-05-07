/**
 * Created by Denis on 23.04.2018.
 */
import {combineReducers} from 'redux';
import authority from "./authorityReducer"
import heroes from "./heroReducer"
import dictionary from "./dictionaryReducer"
import settings from  "./settingsReducer"
import matchup from  "./matchupReducer"

const appReducer = combineReducers({
    authority,heroes,dictionary,settings,matchup
});

export default (state, action) => {
    return appReducer(state, action);
}