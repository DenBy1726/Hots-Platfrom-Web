/**
 * Created by Denis on 04.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"
import AvatarPanel from "./HeroViewPart/AvatarPanel";
import DescriptionPanel from "./HeroViewPart/DescriptionPanel";
import {Tabs} from "antd";
import StatPanel from "./HeroViewPart/StatPanel";
import HeroStatisticTab from "./HeroTabsPart/HeroStatisticTab";
import HeroSinergyTab from "./HeroTabsPart/HeroSinergyTab";
const TabPane = Tabs.TabPane;

export default class HeroDataView extends Component {

    handleLoadMatchup = () =>{
        this.props.onLoadMatchup(this.props.hero.id);
    };

    render() {
        const {hero,matchup,onLoadMatchup,loadingMatchup} = this.props;
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
                    <HeroSinergyTab matchup={matchup} loading={loadingMatchup} onLoadMatchup={this.handleLoadMatchup}/>
                </TabPane>
                <TabPane tab="Эффективность" key="3">Эффективность</TabPane>
                <TabPane tab="Похожие герои" key="4">Похожие герои</TabPane>
            </Tabs>

        </div>
    }
}

HeroDataView.propTypes = {
    hero: propTypes.object.isRequired
};