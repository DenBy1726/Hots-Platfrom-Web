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
import * as matchupActions from "../action/matchupAction";
import * as statisticActions from "../action/statisticActions";
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

    handleFilterChange = filter => {
        this.setState({...this.state, filter: filter.target.value})
    };

    handlePick = hero => {
        this.props.history.push(`/Main/Heroes/${hero.name}`);
    };

    handleMatchupLoad = id => {
        this.props.matchupActions.getHeroMatchup(id);
    };

    handleStatisticLoad = id =>{
        this.props.statisticActions.getHeroStatistic(id);
    };

    render() {
        const heroName = this.props.match.params.name;
        const {heroes, loading, matchupData,statisticData} = this.props;
        const hero = heroes.filter(x => x.name === heroName);
        const listWidth = this.state.heroListVisible ? "200px" : 0;
        let matchup,statistic;
        if (hero[0] === undefined) {
            matchup = null;
            statistic = null;
        } else {
            statistic = statisticData.statistic[hero[0].id] === undefined ? null : statisticData.statistic[hero[0].id];
            matchup = matchupData.matchup[hero[0].id] === undefined ? null : matchupData.matchup[hero[0].id];
            if (matchup !== null)
                matchup = matchup.map((x, index) => {
                    return {...x, name: heroes[index].name, src: heroes[index].iconurl}
                })
        }

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
                    <div style={{width: "100%" , height: "calc(100vh - 68px)", overflow: "auto"}}>
                        {
                            hero.length === 0 ? <div style={{
                                display: "flex", justifyContent: "center",
                                width: "100%",
                                fontSize: "1.5em"
                            }}>
                                Герой не найден. Попробуйте воспользоваться списком слева для выбора героя
                            </div> : <HeroDataView
                                hero={hero[0]}
                                heroes={heroes}
                                matchup={matchup}
                                onLoadMatchup={this.handleMatchupLoad}
                                loadingMatchup={matchupData.loading}
                                statistic={statistic}
                                onLoadStatistic={this.handleStatisticLoad}
                                loadingStatistic={statisticData.loading}
                                onOverlayClick={this.handlePick}

                            />
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
        loading: state.heroes.loading,
        matchupData: state.matchup,
        statisticData: state.statistic
    }
}

function mapDispatchToProps(dispatch) {
    return {
        heroActions: bindActionCreators(heroActions, dispatch),
        dictionaryActions: bindActionCreators(dictionaryActions, dispatch),
        matchupActions: bindActionCreators(matchupActions, dispatch),
        statisticActions: bindActionCreators(statisticActions, dispatch)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(HeroContainer);
