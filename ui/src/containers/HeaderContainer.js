/**
 * Created by Denis on 26.04.2018.
 */
import React, {Component} from "react"
import AppHeader from "../components/AppHeader"
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import * as authorityAction from "../action/authorityAction"
import globalHistory from "../util/browserHistory";
import {withRouter} from "react-router-dom";
import axios from "axios";

class HeaderContainer extends Component{

    componentDidMount(){
        this.props.authorityAction.getUser();
    }

    onTitleClick = ()=>{
        this.props.history.push('');
    };

    render(){
        const {authority} = this.props;
        return <AppHeader
            userName={authority.name}
            isAuthentificated={authority.role.filter(x=>x!== "ANONYMOUS").length !== 0}
            userImage={authority.image}
            onTitleClick={this.onTitleClick}
        />
    }
}



function mapStateToProps(state) {
    return {
        authority: state.authority,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authorityAction: bindActionCreators(authorityAction, dispatch),
    };
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer);
