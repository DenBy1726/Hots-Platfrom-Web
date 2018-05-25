/**
 * Created by Denis on 26.04.2018.
 */
import axios from "axios";
import {
    LOAD_END_DICTIONARY
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
