/**
 * Created by Denis on 23.04.2018.
 */
import React, {Component} from "react";
import HeaderContainer from "./HeaderContainer";
import {Route, Switch, withRouter} from "react-router-dom";
import WelcomeContainer from "./WelcomeContainer";
import * as ROUTES from "../constants/Routes";
import MainContainer from "./MainContainer";
import * as authorityAction from "../action/authorityAction"
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import AppMenu from "../components/MenuPart/AppMenu";
import MenuWrapper from "../components/MenuPart/MenuWrapper";

class App extends Component {

    componentDidMount() {
        this.props.authorityAction.getUser();
    }

    state = {
        menuVisible: false,
    };

    handleMenuClick = () => {
        let result = !this.state.menuVisible;
        this.setState({...this.state, menuVisible: result});
    };


    render() {
        const isAuthenticated = this.props.authority.role.filter(x => x !== "ANONYMOUS").length !== 0;
        return <Switch>
            <Route path={ROUTES.MAIN}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <HeaderContainer
                        onHeaderMenuClick={this.handleMenuClick}
                        menuVisible={this.state.menuVisible}
                        authority={this.props.authority}
                        isAuthenticated={isAuthenticated}
                    />
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <MenuWrapper visible={this.state.menuVisible} isAuthenticated={isAuthenticated}/>
                        <MainContainer/>
                    </div>
                </div>
            </Route>
            <Route path={ROUTES.WELCOME} exact component={WelcomeContainer}/>
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


