/**
 * Created by Denis on 26.04.2018.
 */
import React, {Component} from "react";
import propTypes from "prop-types";
import UserDetails from "./UserDetails";
import LoginDetails from "./LoginDetails";

export default class AppHeader extends Component {
    render() {
        const {
            userName, userImage, titleImage, isAuthentificated,
            onTitleClick
        } = this.props;
        const detailsStyle = {margin: "0px 20px 0px auto", display: "flex",alignItems: "center" };
        return <div
            style={{height: '68px',backgroundColor:"#1A1537",display:"flex", alignItems:"center"}}
        >
            <div style={{marginLeft: "100px"}} onClick={onTitleClick}>
                <img width="180" height="86px" style={{marginBottom:"15px"}} src={titleImage}/>
            </div>
            {
                isAuthentificated
                    ?
                    <div style={detailsStyle}>
                        <UserDetails name={userName} avatar={userImage}/>
                        <button  className="hotsButton" onClick={()=>window.location="/auth/logout"}>Выйти</button>
                    </div>
                    :
                    <div style={detailsStyle}>
                        <LoginDetails/>
                    </div>
            }
        </div>
    }
}

AppHeader.propTypes = {
    userName: propTypes.string.isRequired,
    userImage: propTypes.string.isRequired,
    titleImage: propTypes.string.isRequired,
    isAuthentificated: propTypes.bool.isRequired,
    onTitleClick: propTypes.func.isRequired
};

AppHeader.defaultProps = {
    userName: "Guest",
    userImage: "DefaultAvatar.png",
    titleImage: "TitleLogo.png",
    isAuthentificated: false,
    onTitleClick: () => {
    },
};