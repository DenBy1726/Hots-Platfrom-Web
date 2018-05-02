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
import * as heroActions from "../action/heroAction";
import * as dictionaryActions from "../action/dictionaryAction"
import innerJoin from "../util/innerJoin";
import HeroFilteredList from "../components/Common/ListPart/HeroFilteredList";
import FetchingWrapper from "../hoc/FetchingWrapper";


class MainContainer extends Component {

    state = {
        picked: {}
    };

    componentDidMount() {
        this.props.heroActions.getAllHeroesData();
        this.props.dictionaryActions.getDictionary();
    }

    heroPicked = hero => {
        this.setState({picked: hero.id});
    };

    render() {
        const {heroes, dictionary, loading} = this.props;
        return <FetchingWrapper style={{margin: "10px auto", maxWidth: "814px"}} loading={loading} spinning={true}
                                blur="2px">
            <div style={{margin: "10px auto", maxWidth: "814px"}}>
                <HeroFilteredList
                    dictionary={{
                        franchise: dictionary.franchise,
                        group: dictionary.heroGroup
                    }}
                    loading={heroes.loading}
                    data={heroes.map(x => {
                        return x.id === this.state.picked ? {...x, picked: true} : {...x};
                    })} onClick={this.heroPicked}/>
            </div>
        </FetchingWrapper>
    }
}

function mapStateToProps(state) {
    const heroes = innerJoin(state.heroes.Hero, state.heroes.WebExtension);
    return {
        authority: state.authority,
        dictionary: state.dictionary,
        heroes,
        loading: state.heroes.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        heroActions: bindActionCreators(heroActions, dispatch),
        dictionaryActions: bindActionCreators(dictionaryActions, dispatch)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(MainContainer);
