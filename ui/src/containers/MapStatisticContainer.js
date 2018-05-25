/**
 * Created by Denis on 29.04.2018.
 */
/**
 * Created by Denis on 26.04.2018.
 */
import React, {Component} from "react"
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import joinAllHeroesData from "../selectors/joinAllHeroesData"
import SimpleSelect from "../components/Common/SimpleSelect";
import mapNameToUrl from "../mappers/mapNameToUrl";
import {SimpleBarChart} from "../components/Graphics/SimpleBarChart";

class MapStatisticContainer extends Component {

    state = {
        stage: 0
    };


    render() {
        const {heroes, loading, maps} = this.props;
        const statTypes = [
            "Вероятности победы на карте",
            "Игр сыграно на карте",
            "Вероятности победы героем",
            "Игр сыграно героем"
        ].map((x, id) => {
            return {id, name: x}
        });

        const data = [
            {name: 'Map A', uv: 54, pv: 52, amt: 2400},
            {name: 'Map B', uv: 53, pv: 51, amt: 2210},
            {name: 'Map C', uv: 52, pv: 49, amt: 2290},
            {name: 'Map D', uv: 52, pv: 43, amt: 2000},
            {name: 'Map E', uv: 51, pv: 47, amt: 2181},
            {name: 'Map F', uv: 42, pv: 47, amt: 2500},
            {name: 'Map G', uv: 48, pv: 48, amt: 2100},
        ];

        return <div style={{width: "100%", height: "100vh", overflow: "auto"}}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <div style={{alignSelf: "center", fontSize: "2em"}}>
                    Статистика относительно карт
                </div>
                <SimpleSelect onPick={() => this.setState({stage: 2})} data={statTypes}
                              style={{width: screen.width / 2, marginTop: "2%", alignSelf: "center"}}
                              placeholder="Тип статистики"/>
                {
                    this.state.stage >= 1 ?
                        <SimpleSelect onPick={() => this.setState({stage: 2})} data={heroes}
                                      style={{width: screen.width / 2, marginTop: "2%", alignSelf: "center"}}
                                      placeholder="Выберите героя"/> : null

                }
                <SimpleBarChart data={data} width={screen.width / 2} height={screen.height / 3}/>
            </div>
        </div>

    }
}

function mapStateToProps(state) {
    const heroes = joinAllHeroesData(state.heroes).sort((x, y) => x.name > y.name);
    const maps = state.dictionary.map.map(x => {
        return {...x, iconurl: mapNameToUrl(x.name)}
    });
    return {
        heroes,
        loading: state.heroes.loading,
        maps
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(MapStatisticContainer);
