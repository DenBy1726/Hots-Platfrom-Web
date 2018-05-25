/**
 * Created by Denis on 23.04.2018.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux'
import App from "./containers/App"
import thunk from 'redux-thunk';
import {HashRouter} from "react-router-dom";
import axiosInterceptors from "./util/interceptors"

const rootElement = document.getElementById('app');
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
axiosInterceptors();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    rootElement
);