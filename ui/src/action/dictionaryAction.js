/**
 * Created by Denis on 26.04.2018.
 */
import axios from "axios";
import globalHistory from "../util/browserHistory";
import {
    LOAD_START_AUTH, LOAD_END_AUTH, LOAD_ERROR_AUTH, LOAD_START_HERO_FULL,
    LOAD_END_HERO_FULL, LOAD_ERROR_HERO_FULL, LOAD_END_DICTIONARY
} from "../constants/ActionTypes";

export const getDictionary = () => {
    return dispatch => {
        axios.get("/api/v1/public/dictionary/")
            .then(
            result => {
                dispatch(loadEndDictionary(result.data));
            },
            error => {
            }
        )
    }
};

const loadEndDictionary = (payload)=>{
    return {
        type: LOAD_END_DICTIONARY,
        payload
    }
};
