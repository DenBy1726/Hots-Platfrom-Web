/**
 * Created by Denis on 04.05.2018.
 */
import React, {Component} from "react"
import {Avatar, Button, Icon, Input, List, Select} from "antd";
import propTypes from "prop-types"

export default class SimpleSelect extends Component {
    render() {
        const {data, onPick, style, placeholder} = this.props;
        return <Select
            showSearch
            style={style}
            placeholder={placeholder}
            optionFilterProp="children"
            onChange={onPick}
            dropdownStyle={{backgroundColor: "rgba(26, 21, 55, 0.5)"}}
            filterOption={(input, option) =>
            option.props.children.props.children[1].props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {
                data.map(x => {
                    return <Option value={`${x.id}`}>
                        <div>
                            {x.iconurl !== undefined ? <Avatar style={{marginRight: "10px"}} src={x.iconurl}/> : null}
                            <span style={{color: "rgba(240, 232, 232, 0.88)"}}>{x.name}</span>
                        </div>
                    </Option>
                })
            }
        </Select>
    }
}

SimpleSelect.propTypes = {
    data: propTypes.object.isRequired,
    onPick: propTypes.func.isRequired,
};

SimpleSelect.defaultProps = {};