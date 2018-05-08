/**
 * Created by Denis on 26.04.2018.
 */
import {
    LOAD_START_STATISTIC_ONEHERO, LOAD_END_STATISTIC_ONEHERO, LOAD_ERROR_STATISTIC_ONEHERO
} from "../constants/ActionTypes";

const initialState = {
    statistic: [],
    loading: false,
};

export default function statisticReducer(state = {...initialState}, action) {
    switch (action.type) {
        case LOAD_START_STATISTIC_ONEHERO:
            return {...state, loading: true};
        case LOAD_END_STATISTIC_ONEHERO:
            let newStatistic = [...state.statistic];
            newStatistic[action.payload.id] = action.payload.data;
            return {...state, statistic: newStatistic, loading: false};
        case LOAD_ERROR_STATISTIC_ONEHERO:
            return {...state, loading: false};
        default:
            return state;
    }
}