/**
 * Created by Denis on 26.04.2018.
 */
import React, {Component} from "react";
import propTypes from "prop-types";
import {Icon, Layout, Menu} from "antd";
import HeaderPanel from "./HeaderPart/HeaderPanel";
import AppMenu from "./MenuPart/AppMenu";

export default class AppHeader extends Component {
    state = {
        collapsed: false,
    };

    render() {
        const {
            userName, userImage, titleImage, isAuthenticated,
            onTitleClick, onLogoutClick,menuVisible,onHeaderMenuClick,liteMode,liteModeChanged
        } = this.props;
        const detailsStyle = {margin: "0px 20px 0px auto", display: "flex", alignItems: "center"};
        return <div>
            <HeaderPanel
                detailsStyle={detailsStyle}
                headerPanelStyle={{
                    height: '68px',
                    backgroundColor: "rgba(26, 21, 55,0.5)",
                    display: "flex",
                    alignItems: "center"
                }}
                isAuthenticated={isAuthenticated}
                logoutButtonStyle="hotsButton"
                logoutOnClick={onLogoutClick}
                logoutText="Выход"
                menuButtonStyle={{
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "rgba(0,0,0,0)",
                    marginLeft: "10px"
                }}
                menuIconStyle={{
                    fontSize: 30,
                    color: "rgba(255, 247, 247, 0.88)"
                }}
                menuIconFold="menu-fold"
                menuIconUnFold="menu-unfold"
                menuVisible={menuVisible}
                onTitleClick={onTitleClick}
                onMenuClick={onHeaderMenuClick}
                titleHeight="86px"
                titleImage={titleImage}
                titleStyle={{marginBottom: "15px", cursor:"pointer"}}
                titleWidth="180px"
                userName={userName}
                userImage={userImage}
                liteMode={liteMode}
                liteModeChanged={liteModeChanged}
            />
        </div>
    }
}

AppHeader.propTypes = {
    userName: propTypes.string.isRequired,
    userImage: propTypes.string.isRequired,
    titleImage: propTypes.string.isRequired,
    isAuthentificated: propTypes.bool.isRequired,
    onMenuClick: propTypes.func.isRequired,
    onTitleClick: propTypes.func.isRequired,
    liteMode: propTypes.bool.isRequired,
    liteModeChanged: propTypes.func.isRequired,
};

AppHeader.defaultProps = {
    userName: "Guest",
    userImage: "/DefaultAvatar.png",
    titleImage: "/TitleLogo.png",
    isAuthentificated: false,
    onMenuClick: () => {
    },
    onTitleClick: () => {
    },
};