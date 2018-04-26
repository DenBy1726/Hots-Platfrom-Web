/**
 * Created by Denis on 23.04.2018.
 */
import React, {Component} from "react";
import HeaderContainer from "./HeaderContainer";
import {Route} from "react-router-dom";


export default class App extends Component {
    render() {
        return <Route>
            <HeaderContainer/>
            </Route>
    }
}

