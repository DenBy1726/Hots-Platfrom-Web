/**
 * Created by Denis on 29.04.2018.
 */
/**
 * Created by Denis on 26.04.2018.
 */
import React, {Component} from "react"
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import {Layout} from "antd";


class MainContainer extends Component {

    render() {
        return  "ggdgh"
    }
}


function mapStateToProps(state) {
    return {
        authority: state.authority,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(MainContainer);
