/**
 * Created by Denis on 26.04.2018.
 */
import {
    LOAD_START_MATCHUP_ONEHERO,
    LOAD_END_MATCHUP_ONEHERO,
    LOAD_ERROR_MATCHUP_ONEHERO
} from "../constants/ActionTypes";

const initialState = {
    matchup: [],
    loading: false,
};

export default function matchupReducer(state = {...initialState}, action) {
    switch (action.type) {
        case LOAD_START_MATCHUP_ONEHERO:
            return {...state, loading: true};
        case LOAD_END_MATCHUP_ONEHERO:
            let newMatchup = [...state.matchup];
            newMatchup[action.payload.id] = action.payload.data;
            return {...state, matchup: newMatchup, loading: false};
        case LOAD_ERROR_MATCHUP_ONEHERO:
            return {...state, loading: false};
        default:
            return state;
    }
}