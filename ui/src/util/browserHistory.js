/**
 * Created by Denis on 26.04.2018.
 */
import {browserHistory} from 'react-router-redux';
const history = browserHistory;
const globalHistory = ()=>{
    return history;
};
export default globalHistory;