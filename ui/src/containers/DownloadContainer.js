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
import {Collapse, List} from "antd";
import AppDownload from "../components/DownloadPart/AppDownload";
import UpdateDownload from "../components/DownloadPart/UpdateDownload";
import NetworkDownload from "../components/DownloadPart/NetworkDownload";
const Panel = Collapse.Panel;

class DownloadContainer extends Component {

    render() {
        const dataset = [
            {
                "date": new Date("2018-04-11"),
                "id": "131679490841489755"
            }
        ];
        const networks = [
            {
                "dataset": {
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
                "isbest": true,
            },
            {
                "dataset": {
                    "date": "2018-04-11"
                },
                "state": {
                    "error": 422.435785404927,
                    "iteration": 1000,
                    "validerror": 80.5774901252698,
                    "percent": 0.710588235294118,
                    "validpercent": 0.677777777777778
                },
                "meta": {
                    "name": "NNDataGauss",
                    "clusterpath": "Clusters.Cluster",
                    "alias": "SubgroupGaussMethod",
                    "description": "Combination of comunity opinions bassed method and Gaussain clusterisation"
                },
                "isbest": false,
            },
            {
                "dataset": {
                    "date": "2018-04-11"
                },
                "state": {
                    "error": 431.565377283067,
                    "iteration": 316,
                    "validerror": 79.2768767908171,
                    "percent": 0.712117647058824,
                    "validpercent": 0.708666666666667
                },
                "meta": {
                    "name": "NNData",
                    "clusterpath": "default",
                    "alias": "SubgroupMethod",
                    "description": "Subgroup clustering method based on the opinion of the community"
                },
                "isbest": true,
            },
            {
                "dataset": {
                    "date": "2018-04-11"
                },
                "state": {
                    "error": 432.454616174354,
                    "iteration": 235,
                    "validerror": 78.961150855174,
                    "percent": 0.700901960784314,
                    "validpercent": 0.687555555555556
                },
                "meta": {
                    "name": "NNDataGauss",
                    "clusterpath": "Clusters.Cluster",
                    "alias": "SubgroupGaussMethod",
                    "description": "Combination of comunity opinions bassed method and Gaussain clusterisation"
                },
                "isbest": true,
            }
        ];
        return <div style={{overflow: "auto", width: "100%", height: "calc(100vh - 68px)"}}>
            <Collapse defaultActiveKey={['1']}>
            <Panel header="Скачать offline версию" key="1">
                <AppDownload/>
            </Panel>
            <Panel header="Скачать обновления знаний" key="2">
                <UpdateDownload data={dataset}/>
            </Panel>
            <Panel header="Скачать модель прогнозирования" key="3">
                <NetworkDownload data={networks}/>
            </Panel>
        </Collapse>
        </div>
    }
}

function mapStateToProps(state) {
    const heroes = joinAllHeroesData(state.heroes).sort((x, y) => x.name > y.name);
    return {
        heroes,
        dictionary: {
            franchise: state.dictionary.franchise,
            group: state.dictionary.heroGroup
        },
        loading: state.heroes.loading || state.dictionary.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(DownloadContainer);
