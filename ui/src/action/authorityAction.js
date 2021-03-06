/**
 * Created by Denis on 26.04.2018.
 */
import axios from "axios";
import {LOAD_START_AUTH, LOAD_END_AUTH, LOAD_ERROR_AUTH} from "../constants/ActionTypes";

export const getUser = () => {
    return dispatch => {
        dispatch(loadStartAction());
        axios({
            method: "get",
            url: "/auth/user",
            withCredentials: true
        }).then(
            result => {
                dispatch(loadEndAction(result.data));
            },
            error => {
                dispatch(loadErrorAction());
            }
        )
    }
};

const loadStartAction = ()=>{
    return {
        type: LOAD_START_AUTH
    }
};

const loadEndAction = (payload)=>{
    return {
        type: LOAD_END_AUTH,
        payload
    }
};

const loadErrorAction = ()=>{
    return {
        type: LOAD_ERROR_AUTH
    }
};