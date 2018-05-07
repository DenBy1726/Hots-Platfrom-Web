/**
 * Created by Denis on 02.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"
import Preview from "../Common/Preview";

export default class PortraitPreview extends Component {
    render() {
        const {portrait, title, subtitle, buttonText, onClick, mode} = this.props;
        return <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{fontSize: "2em", textShadow: "0 0 1rem #009cff"}}>
                    {title}
                </div>
                <div style={{fontSize: "1.5em"}}>
                    {subtitle}
                </div>
            </div>
            <Preview
                mode={mode}
                portrait={portrait}
            />
            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                {
                    portrait !== "" ?
                        <button onClick={onClick} style={{width: "50%"}} className={"hotsButton"}>
                            {buttonText}
                        </button> : null
                }
            </div>

        </div>
    }
}

PortraitPreview.propTypes = {
    portrait: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    buttonText: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    //image,video
    mode: propTypes.string.isRequired
};

PortraitPreview.defaultProps = {
    portrait: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    buttonText: "Подробнее",
    mode: "image"
};