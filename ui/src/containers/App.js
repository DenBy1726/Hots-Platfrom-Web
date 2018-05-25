/**
 * Created by Denis on 23.04.2018.
 */
import React, {Component} from "react";
import HeaderContainer from "./HeaderContainer";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import WelcomeContainer from "./WelcomeContainer";
import * as ROUTES from "../constants/Routes";
import MainContainer from "./MainContainer";
import * as authorityAction from "../action/authorityAction"
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import AppMenu from "../components/MenuPart/AppMenu";
import MenuWrapper from "../components/MenuPart/MenuWrapper";
import MainRouter from "./MainRouter";

class App extends Component {

    componentDidMount() {
        this.props.authorityAction.getUser();
    }

    render() {
        return <Switch>
            <Route path={ROUTES.MAIN} component={MainRouter}/>
            <Route path={ROUTES.WELCOME} exact component={WelcomeContainer}/>
            <Redirect exact from={`${ROUTES.FACEBOOK_REDIRECT}`} to='/Main'/>
            <Route exact path={`${ROUTES.DENIED}`}>
            </Route>
        </Switch>
    }
}

const mapStateToProps = (state) => {
    return {
        authority: state.authority
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authorityAction: bindActionCreators(authorityAction, dispatch)
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App)


