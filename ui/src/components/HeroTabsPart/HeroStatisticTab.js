/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import {Tabs} from "antd";
import HeroStatisticTabItem from "./HeroStatisticTabItem";
const TabPane = Tabs.TabPane;

export default class HeroStatisticTab extends Component{
    render(){
        const {min,max,avg} = this.props;
        return <Tabs defaultActiveKey="1.2" tabPosition="left">
            <TabPane tab="Минимум" key="1.1">
                <HeroStatisticTabItem data={min}/>
            </TabPane>
            <TabPane tab="Среднее" key="1.2">
                <HeroStatisticTabItem data={avg}/>
            </TabPane>
            <TabPane tab="Максимум" key="1.3">
                <HeroStatisticTabItem data={max}/>
            </TabPane>
        </Tabs>
    }
}