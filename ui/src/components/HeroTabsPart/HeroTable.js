/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import {Avatar, Table, Tabs} from "antd";
import HeroStatisticTabItem from "./HeroStatisticTabItem";

export default class HeroTable extends Component {

    render() {
        const {data, loading, onLoad,meta} = this.props;
        if (data === null && loading === false)
            onLoad();
        return <Table
            style={{backgroundColor: "rgba(1,1,1,0.3)"}}
            pagination={{showSizeChanger: true}}
            loading={loading}
            columns={meta}
            dataSource={data}
        />
    }
}