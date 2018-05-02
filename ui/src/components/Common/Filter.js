/**
 * Created by Denis on 02.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"
import {List} from "antd";

export default class Filter extends Component {
    render() {
        const {filter} = this.props;
        return <div style={{display: "flex", flexDirection: "row"}}>
            {filter.map(item => {
                return <div style={{flexGrow: 1}}>
                    {item.title}
                    <List
                        grid={{column: 8}}
                        dataSource={item.category}
                        emptyText=""
                        renderItem={item => {
                            return <List.Item>
                                <img style={{cursor: "pointer"}} width="30px" height="30px" src={item.image}/>
                            </List.Item>
                        }}
                    />
                </div>
            })}

        </div>
    }
}

Filter.propTypes = {
    filter: propTypes.array.isRequired
};