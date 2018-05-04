/**
 * Created by Denis on 02.05.2018.
 */
import React, {Component} from "react";
import HeaderContainer from "./HeaderContainer";
import {Route, Switch, withRouter} from "react-router-dom";
import * as ROUTES from "../constants/Routes";
import MainContainer from "./MainContainer";
import {bindActionCreators, compose} from "redux";
import * as heroActions from "../action/heroAction";
import * as dictionaryActions from "../action/dictionaryAction"
import {connect} from "react-redux";
import MenuWrapper from "../components/MenuPart/MenuWrapper";
import HeroContainer from "./HeroContainer";
class MainRouter extends Component {

    state = {
        menuVisible: false,
    };

    componentDidMount(){
        this.props.heroActions.getAllHeroesData();
        this.props.dictionaryActions.getDictionary();
    }

    handleMenuClick = () => {
        let result = !this.state.menuVisible;
        this.setState({...this.state, menuVisible: result});
    };

    render() {
        const isAuthenticated = this.props.authority.role.filter(x => x !== "ANONYMOUS").length !== 0;
        return <div style={{display: "flex", flexDirection: "column"}}>
            <HeaderContainer
                onHeaderMenuClick={this.handleMenuClick}
                menuVisible={this.state.menuVisible}
                authority={this.props.authority}
                isAuthenticated={isAuthenticated}
            />
            <div style={{display: "flex", flexDirection: "row"}}>
                <MenuWrapper path={this.props.history.pathname} visible={this.state.menuVisible} isAuthenticated={isAuthenticated}/>
                <Switch>
                    <Route exact path={ROUTES.MAIN}>
                        <div style={{margin: "10px auto"}}>
                            <MainContainer/>
                        </div>
                    </Route>
                    <Route exact path={`${ROUTES.HEROES}/:name?`}>
                        <div style={{width:"100%"}}>
                            <HeroContainer/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        authority: state.authority
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        heroActions: bindActionCreators(heroActions,dispatch),
        dictionaryActions: bindActionCreators(dictionaryActions,dispatch)
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(MainRouter)


