/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import {Tabs} from "antd";
import HeroStatisticTabItem from "./HeroStatisticTabItem";
import HeroSimilarTabItem from "./HeroSimilarTabItem";
const TabPane = Tabs.TabPane;

export default class HeroSimilarTab extends Component{
    render(){
        const {meta,heroes,picked,onOverlayClick} = this.props;
        return <Tabs tabPosition="left">
            {
                meta.map((x,index)=>{
                    return  <TabPane tab={x.name} key={`4.${index+1}`}>
                        <HeroSimilarTabItem
                            data={heroes}
                            meta={x}
                            picked={picked}
                            heroes={heroes}
                            onOverlayClick={onOverlayClick}
                        />
                    </TabPane>
                })
            }
        </Tabs>
    }
}