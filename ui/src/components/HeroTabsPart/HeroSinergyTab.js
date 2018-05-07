/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import {Avatar, Table, Tabs} from "antd";
import HeroStatisticTabItem from "./HeroStatisticTabItem";

export default class HeroSinergyTab extends Component {
    render() {
        const {matchup, loading, onLoadMatchup} = this.props;
        if(matchup === null && loading === false)
            onLoadMatchup();
        return <Table
            style={{backgroundColor: "rgba(1,1,1,0.3)"}}
            loading={loading}
            columns={
                [
                    {
                        title: 'Hero',
                        dataIndex: 'name',
                        render: (cell, row) => {
                           return <div style={{color: "rgba(255, 247, 247, 0.88)"}}>
                                <Avatar style={{marginRight: "10px"}} src={row.src}/>
                                {row.name}
                            </div>
                        }
                    },
                    {
                        title: 'With',
                        dataIndex: 'winWith'
                    },
                    {
                        title: 'Against',
                        dataIndex: 'winAgainst'
                    }
                ]
            }
            dataSource={matchup}
            />
    }
}