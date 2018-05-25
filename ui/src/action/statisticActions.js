/**
 * Created by Denis on 26.04.2018.
 */
import axios from "axios";
import {
    LOAD_START_STATISTIC_ONEHERO, LOAD_END_STATISTIC_ONEHERO,
    LOAD_ERROR_STATISTIC_ONEHERO
} from "../constants/ActionTypes";

export const getHeroStatistic = id => {
    return dispatch => {
        dispatch(loadStartAction());
        axios({
            method: "get",
            url: `/api/v1/public/statistic/?hero=${id}`,
        }).then(
            result => {
                dispatch(loadEndAction(result.data,id));
            },
            error => {
                dispatch(loadErrorAction());
            }
        )
    }
};

const loadStartAction = ()=>{
    return {
        type: LOAD_START_STATISTIC_ONEHERO
    }
};

const loadEndAction = (payload,id)=>{
    return {
        type: LOAD_END_STATISTIC_ONEHERO,
        payload: {
            data:payload,
            id
        }
    }
};

const loadErrorAction = ()=>{
    return {
        type: LOAD_ERROR_STATISTIC_ONEHERO
    }
};