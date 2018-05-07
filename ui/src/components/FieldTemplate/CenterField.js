/**
 * Created by Denis on 07.05.2018.
 */
import React,{Component} from "react"
import propTypes from "prop-types"

export default class CenterField extends  Component{
    render(){
        const {label,value} = this.props;
        return    value !== undefined ?
            <div style={{fontSize: "1.2em", textAlign: "center"}}>
                {label}
            </div>
            : null
    }
}

CenterField.propTypes = {
    label : propTypes.string.isRequired,
    value: propTypes.string.isRequired
};