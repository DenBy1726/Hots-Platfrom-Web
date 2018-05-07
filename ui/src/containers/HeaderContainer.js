/**
 * Created by Denis on 26.04.2018.
 */
import React, {Component} from "react"
import AppHeader from "../components/AppHeader"
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import * as settingsActions from "../action/settingsActions"
import {withRouter} from "react-router-dom";
import * as ROUTES from "../constants/Routes";

class Header extends Component {

    render() {
        const {authority, menuVisible, onHeaderMenuClick, isAuthenticated, liteMode} = this.props;
        return <AppHeader
            userName={authority.name}
            isAuthenticated={isAuthenticated}
            userImage={authority.image}
            onLogoutClick={() => window.location = ROUTES.LOGOUT}
            onTitleClick={() => this.props.history.push(ROUTES.WELCOME)}
            onHeaderMenuClick={onHeaderMenuClick}
            menuVisible={menuVisible}
            liteMode={liteMode}
            liteModeChanged={state => this.props.settingsActions.changeLiteMode(state)}/>
    }
}

const mapStateToProps = (state) => {
    return {
        liteMode: state.settings.liteMode
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        settingsActions: bindActionCreators(settingsActions, dispatch),
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Header);
