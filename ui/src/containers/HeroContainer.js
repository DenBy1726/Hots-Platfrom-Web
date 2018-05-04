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
import joinAllHeroesData from "../selectors/joinAllHeroesData"
import SimpleList from "../components/Common/SimpleList";
import HeroDataView from "../components/HeroDataView";


class HeroContainer extends Component {

    state = {
        heroListVisible: true,
        filter: "",
    };

    handleVisibilyChange = () => {
        this.setState({...this.state, heroListVisible: !this.state.heroListVisible});
    };

    handleFilterChange = (filter) => {
        this.setState({...this.state, filter: filter.target.value})
    };

    handlePick = (hero) => {
        this.props.history.push(`/Main/Heroes/${hero.name}`);
    };

    render() {
        const heroName = this.props.match.params.name;
        const {heroes, loading} = this.props;
        const hero = heroes.filter(x => x.name === heroName);
        const listWidth = this.state.heroListVisible ? "200px" : 0;
        return <div style={{display: "flex"}}>
            <div style={{height: "100vh", minWidth: listWidth}}>
                <SimpleList
                    data={heroes}
                    visible={this.state.heroListVisible}
                    onVisibilityChange={this.handleVisibilyChange}
                    filter={this.state.filter}
                    onFilterChanged={this.handleFilterChange}
                    loading={loading}
                    onPick={this.handlePick}
                />
            </div>
            {
                heroName === undefined ? <div style={{
                    display: "flex", justifyContent: "center",
                    width: "100%",
                    fontSize: "1.5em"
                }}>
                    Пожалуйста, выберите героя из списка слева для просмотра деталей
                </div> :
                    <div style={{width: "100%"}}>
                        {
                            hero.length === 0 ? <div style={{
                                display: "flex", justifyContent: "center",
                                width: "100%",
                                fontSize: "1.5em"
                            }}>
                                Герой не найден. Попробуйте воспользоваться списком слева для выбора героя
                            </div> : <HeroDataView hero={hero[0]}/>
                        }
                    </div>
            }
        </div>

    }
}

function mapStateToProps(state) {
    const heroes = joinAllHeroesData(state.heroes).sort((x, y) => x.name > y.name);
    return {
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
)(HeroContainer);
