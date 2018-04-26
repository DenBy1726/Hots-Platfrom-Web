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
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('app');
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    rootElement
);