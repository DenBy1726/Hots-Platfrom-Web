/**
 * Created by Denis on 26.04.2018.
 */
import axios from "axios";
import globalHistory from "../util/browserHistory";
import {
    LOAD_START_AUTH, LOAD_END_AUTH, LOAD_ERROR_AUTH, LOAD_START_MATCHUP_ONEHERO,
    LOAD_END_MATCHUP_ONEHERO, LOAD_ERROR_MATCHUP_ONEHERO
} from "../constants/ActionTypes";

export const getHeroMatchup = (id) => {
    return dispatch => {
        dispatch(loadStartAction());
        axios({
            method: "get",
            url: `/api/v1/public/matchup/${id}`,
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
        type: LOAD_START_MATCHUP_ONEHERO
    }
};

const loadEndAction = (payload,id)=>{
    return {
        type: LOAD_END_MATCHUP_ONEHERO,
        payload: {
            data:payload,
            id
        }
    }
};

const loadErrorAction = ()=>{
    return {
        type: LOAD_ERROR_MATCHUP_ONEHERO
    }
};