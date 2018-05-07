/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"

export default class Preview extends Component {
    render() {
        const {mode, portrait, videoContainerStyle, imageStyle, videoStyle, imageContainerStyle,imageWidth} = this.props;
        return mode === "video" ?
            <div style={videoContainerStyle}>
                <video style={videoStyle}
                       src={portrait}
                       autoplay="autoplay" loop="loop">
                </video>
            </div>
            :
            <div style={imageContainerStyle}>
                <img style={imageStyle} src={portrait}
                     width={imageWidth}/>
            </div>


    }
}

Preview.propTypes = {
    mode: propTypes.oneOf(['video', 'image']),
    videoContainerStyle: propTypes.object.isRequired,
    videoStyle: propTypes.object.isRequired,
    imageContainerStyle: propTypes.object.isRequired,
    imageStyle: propTypes.object.isRequired,
    portrait: propTypes.string.isRequired,
    imageWidth: propTypes.string.isRequired,
};

Preview.defaultProps = {
    mode: "image",
    videoContainerStyle: {
        width: "400px",
        margin: "0 20px",
        overflow: "hidden",
        opacity: "0.6",
        border: "2px solid #2b83d1",
        maxHeight: "380px",
        borderRadius: "56px",
        boxShadow: "rgb(62, 49, 245) 0px 0px 40px 15px"
    },
    imageStyle: {
        border: "2px solid #2b83d1",
        maxHeight: "380px",
        borderRadius: "56px",
        boxShadow: "rgb(62, 49, 245) 0px 0px 40px 15px"
    },
    imageContainerStyle: {
        width: "250px", margin: "0 20px"
    },
    videoStyle: {
        width: "750px",
        marginLeft: "-280px",
        marginTop: "-50px",
    },
    imageWidth: "250px"
};