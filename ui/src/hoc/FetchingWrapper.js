import React, {Component} from "react"
import propTypes from "prop-types";
import {Icon, Spin} from "antd";

class FetchingWrapper extends Component {
    onClick = (e) => {
        e.stopPropagation();
    };

    render() {
        const {loading, spinning, blur, classes, children} = this.props;
        if (loading === true) {
            return <div style={{overflow: "hidden"}}>
                <div style={{zIndex: 10000, filter: `blur(${blur})`}}
                     onMouseDownCapture={e => this.onClick(e)}
                     onScrollCapture={e => this.onClick(e)}
                     onClickCapture={e => this.onClick(e)}>
                    {children}
                </div>
                {
                    spinning === true ?
                        <Spin style={{
                            position: "absolute",
                            left: "50%",
                            bottom: "50%"
                        }} indicator={<Icon type="loading" style={{fontSize: 24}} spin/>}/> :
                        null
                }
            </div>
        }
        else {
            return children;
        }
    }
}

FetchingWrapper.propTypes = {
    loading: propTypes.bool.isRequired,
    spinning: propTypes.bool.isRequired,
    blur: propTypes.string.isRequired
};

FetchingWrapper.defaultPropTypes = {
    blur: "0px"
};

export default FetchingWrapper;