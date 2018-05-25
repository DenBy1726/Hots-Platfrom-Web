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
import innerJoin from "../util/innerJoin";
import FetchingWrapper from "../hoc/FetchingWrapper";
import HeroListView from "../components/ListPart/HeroListView";
import {Checkbox} from "antd";


class MainContainer extends Component {

    state = {
        picked: {},
    };

    componentDidMount() {
    }

    heroPicked = hero => {
        this.setState({picked: hero});
    };

    handleSubmit = () => {
        this.props.history.push(`/Main/Heroes/${this.state.picked.name}`)
    };

    render() {
        const {heroes, dictionary, loading, liteMode} = this.props;
        const {picked} = this.state;
        return <div style={{margin: "10px auto"}}>
            <FetchingWrapper style={{maxWidth: "814px"}} loading={loading} spinning={true}
                             blur="2px">
                <HeroListView
                    dictionary={{
                        franchise: dictionary.franchise,
                        group: dictionary.heroGroup
                    }}
                    loading={heroes.loading}
                    picked={picked}
                    title={picked !== undefined ? picked.name : undefined}
                    subtitle={picked !== undefined ? picked.title : undefined}
                    data={heroes.map(x => {
                        return x.id === this.state.picked.id ? {...x, picked: true} : {...x};
                    })}
                    onClick={this.heroPicked}
                    onSubmitClick={this.handleSubmit}
                    mode={liteMode ? "video" : "fetched"}
                />
            </FetchingWrapper>
        </div>
    }
}

function mapStateToProps(state) {
    const heroes = innerJoin(innerJoin(state.heroes.Hero, state.heroes.WebExtension, 'id'), state.heroes.Details, 'id');
    return {
        authority: state.authority,
        dictionary: state.dictionary,
        liteMode: state.settings.liteMode,
        heroes,
        loading: state.heroes.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(MainContainer);
