/**
 * Created by Denis on 26.04.2018.
 */
import React, {Component} from "react"
import AppHeader from "../components/AppHeader"
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import * as authorityAction from "../action/authorityAction"
import {withRouter} from "react-router-dom";
import * as ROUTES from "../constants/Routes";

class Header extends Component {

    render() {
        const {authority,menuVisible,onHeaderMenuClick,isAuthenticated} = this.props;
        return <AppHeader
            userName={authority.name}
            isAuthenticated={isAuthenticated}
            userImage={authority.image}
            onLogoutClick={() => window.location = ROUTES.LOGOUT}
            onTitleClick={() => this.props.history.push(ROUTES.WELCOME)}
            onHeaderMenuClick={onHeaderMenuClick}
            menuVisible={menuVisible}
        />
    }
}


export default withRouter(Header);
