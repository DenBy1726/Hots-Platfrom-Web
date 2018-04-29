/**
 * Created by Denis on 26.04.2018.
 */
import React, {Component} from "react";
import propTypes from "prop-types";
import {Avatar} from "antd";

export default class LoginDetails extends Component{
    render(){
        const servers = ["facebook","google","github"];
        return <div style={{display: "flex", margin: "0 0 0 auto", alignItems: "center"}}>
            <span>
                Войти при помощи:
            </span>
            {
                servers.map(x=>{
                    return <div onClick={()=>window.location=`/auth/login/${x}`}>
                        <Avatar icon={x} className="hotsAvatar"/>
                    </div>
                })
            }
        </div>
    }
}
