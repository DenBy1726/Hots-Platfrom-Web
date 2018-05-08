/**
 * Created by Denis on 23.04.2018.
 */
import {combineReducers} from 'redux';
import authority from "./authorityReducer"
import heroes from "./heroReducer"
import dictionary from "./dictionaryReducer"
import settings from  "./settingsReducer"
import matchup from  "./matchupReducer"
import statistic from "./statisticReducer"

const appReducer = combineReducers({
    authority,heroes,dictionary,settings,matchup,statistic
});

export default (state, action) => {
    return appReducer(state, action);
}