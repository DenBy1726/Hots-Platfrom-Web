/**
 * Created by Denis on 02.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"

export default class PortraitPreview extends Component {
    render() {
        const {portrait} = this.props;
        return <div style={{width: "250px", margin: "0 20px"}}>
            <img style={{
                border: "2px solid #2b83d1",
                maxHeight: "380px",
                borderRadius: "56px",
                boxShadow: "rgb(62, 49, 245) 0px 0px 40px 15px"
            }} src={portrait}
                 width="250px"/>
        </div>
    }
}

PortraitPreview.propTypes = {
    portrait: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired
};