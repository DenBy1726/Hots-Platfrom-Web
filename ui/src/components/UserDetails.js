/**
 * Created by Denis on 26.04.2018.
 */
import React, {Component} from "react";
import propTypes from "prop-types";
import {Avatar} from "antd";

export default class UserDetails extends Component{
    render(){
        const {avatar,name} = this.props;
        return <div style={{display: "flex", margin: "0 0 0 auto", alignItems: "center"}}>
            <span>
                Привет, {name}
            </span>
            <Avatar src={avatar} style={{margin:"10px"}}/>
        </div>
    }
}

UserDetails.propTypes = {
    name: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired
};