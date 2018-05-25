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
import SimpleSelect from "../components/Common/SimpleSelect";
import SelectGroup from "../components/SelectGroup";
import ForecastReport from "../components/ForecastReport";


class ForecastContainer extends Component {

    render() {
        const {heroes, loading} = this.props;
        const report = {
            "key": {
                "dataset": {
                    "id": 131679490841489760,
                    "date": "2018-04-11"
                },
                "state": {
                    "error": 422.191796592685,
                    "iteration": 1000,
                    "validerror": 79.9081033809588,
                    "percent": 0.72156862745098,
                    "validpercent": 0.698222222222222
                },
                "meta": {
                    "name": "NNData",
                    "clusterpath": "default",
                    "alias": "SubgroupMethod",
                    "description": "Subgroup clustering method based on the opinion of the community"
                },
                "isbest": false,
                "id": 636590824402041500
            },
            "value": 0.5800627530950064
        };
        return <div style={{width: "100%", height: "100vh", overflow: "auto"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}}>
                <SelectGroup heroes={heroes} title="Команда 1"/>
                <ForecastReport report={report}/>
                <SelectGroup heroes={heroes} title="Команда 2"/>
            </div>
            <div style={{display:"flex", justifyContent: "center", height: "130px"}}>
                <button style={{minWidth: "30%", margin: "0 5%", height: "50px", fontSize: "2em"}}
                        className={"hotsButton"}>
                    Прогноз
                </button>
            </div>
        </div>

    }
}

function mapStateToProps(state) {
    const heroes = joinAllHeroesData(state.heroes).sort((x, y) => x.name > y.name);
    return {
        heroes,
        loading: state.heroes.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ForecastContainer);
