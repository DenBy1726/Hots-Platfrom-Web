/**
 * Created by Denis on 04.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"
import AvatarPanel from "./HeroViewPart/AvatarPanel";
import DescriptionPanel from "./HeroViewPart/DescriptionPanel";
import {Avatar, Tabs} from "antd";
import StatPanel from "./HeroViewPart/StatPanel";
import HeroStatisticTab from "./HeroTabsPart/HeroStatisticTab";
import HeroTable from "./HeroTabsPart/HeroTable";
import mapNameToUrl from "../mappers/mapNameToUrl";
import HeroSimilarTab from "./HeroTabsPart/HeroSimilarTab";
const TabPane = Tabs.TabPane;

export default class HeroDataView extends Component {

    handleLoadMatchup = () => {
        this.props.onLoadMatchup(this.props.hero.id);
    };

    handleLoadStatistic = () => {
        this.props.onLoadStatistic(this.props.hero.id);
    };

    render() {
        const {
            hero,
            matchup, loadingMatchup,
            statistic, loadingStatistic,
            heroes, onOverlayClick
        } = this.props;
        return <div style={{marginLeft: "10px", display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex"}}>
                <AvatarPanel hero={hero}/>
                <DescriptionPanel hero={hero}/>
            </div>
            <StatPanel hero={hero}/>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Статистика" key="1">
                    <HeroStatisticTab min={hero.min} max={hero.max} avg={hero.avg}/>
                </TabPane>
                <TabPane tab="Синергия" key="2">
                    <HeroTable
                        data={matchup}
                        loading={loadingMatchup}
                        onLoad={this.handleLoadMatchup}
                        meta={
                            [
                                {
                                    title: 'Hero',
                                    dataIndex: 'name',
                                    render: (cell, row) => {
                                        return <div style={{color: "rgba(255, 247, 247, 0.88)"}}>
                                            <Avatar style={{marginRight: "10px"}} src={row.src}/>
                                            {row.name}
                                        </div>
                                    },
                                    sorter: (a, b) => a.name.localeCompare(b.name)
                                },
                                {
                                    title: 'With',
                                    dataIndex: 'winWith',
                                    sorter: (a, b) => a.winWith - b.winWith,
                                },
                                {
                                    title: 'Against',
                                    dataIndex: 'winAgainst',
                                    sorter: (a, b) => a.winAgainst - b.winAgainst,

                                }
                            ]
                        }
                    />
                </TabPane>
                <TabPane tab="Эффективность" key="3">
                    <HeroTable
                        data={statistic}
                        loading={loadingStatistic}
                        onLoad={this.handleLoadStatistic}
                        meta={
                            [
                                {
                                    title: 'Map',
                                    dataIndex: 'map',
                                    render: (cell, row) => {
                                        return <div style={{color: "rgba(255, 247, 247, 0.88)"}}>
                                            <Avatar style={{marginRight: "10px"}}
                                                    src={mapNameToUrl(row.map.name)}
                                            />
                                            {row.map.name}
                                        </div>
                                    },
                                    sorter: (a, b) => a.map.name.localeCompare(b.map.name)
                                },
                                {
                                    title: 'Matches',
                                    dataIndex: 'matches',
                                    sorter: (a, b) => a.matches - b.matches,
                                },
                                {
                                    title: 'Wins',
                                    dataIndex: 'wins',
                                    sorter: (a, b) => a.wins - b.wins,

                                },
                                {
                                    title: 'WinRate',
                                    dataIndex: 'winrate',
                                    render: (cell, row) => {
                                        return Math.round((row.wins / row.matches) * 10000, 2) / 100 + " %";
                                    },
                                    sorter: (a, b) => a.wins / a.matches - b.wins / b.matches
                                }
                            ]
                        }
                    />
                </TabPane>
                <TabPane tab="Похожие герои" key="4">
                    <HeroSimilarTab
                        picked={hero}
                        heroes={heroes}
                        onOverlayClick={onOverlayClick}
                        meta={[{
                            name: "По роли",
                            path: "group.id"
                        }, {
                            name: "По стилю игры",
                            path: "subgroupcluster.id"
                        }, {
                            name: "На основании статистики (Композиция)",
                            path: "cluster"
                        }, {
                            name: "На основании статистики (Гауссиан)",
                            path: "gaussian.cluster"
                        }
                        ]}
                    />
                </TabPane>
            </Tabs>

        </div>
    }
}

HeroDataView.propTypes = {
    hero: propTypes.object.isRequired
};