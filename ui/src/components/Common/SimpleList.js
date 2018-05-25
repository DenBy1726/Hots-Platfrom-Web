/**
 * Created by Denis on 04.05.2018.
 */
import React, {Component} from "react"
import {Avatar, Button, Icon, Input, List} from "antd";
import propTypes from "prop-types"

export default class SimpleList extends Component {
    render() {
        const {data, visible, menuIconFold, menuIconUnfold, menuButtonStyle, menuIconStyle,
            onVisibilityChange, filter, onFilterChanged,loading, onPick} = this.props;
        return <div>
            <div style={{display: "flex"}}>
                {visible && <Input style={{width: "83%"}} onChange={onFilterChanged} className="hotsInput" size="small" placeholder="Поиск..."/>}
                <Button style={menuButtonStyle} onClick={onVisibilityChange}>
                    <Icon style={menuIconStyle}
                          type={visible ? menuIconFold : menuIconUnfold}/>
                </Button>
            </div>
            {visible && <List
                loading={loading}
                style={{
                    overflow: "auto",
                    maxHeight: "calc(100vh - 96px)"
                }}
                size="small"
                dataSource={data.filter(x=>x.name.toUpperCase().includes(filter.toUpperCase()))}
                renderItem={item => (
                    <List.Item className="simpleList" onClick={()=>onPick(item)}>
                        <div style={{color: "rgba(255, 247, 247, 0.88)"}}>
                            <Avatar style={{marginRight: "10px"}} src={item.iconurl}/>
                            {item.name}
                        </div>
                    </List.Item>
                )}
            />
            }
        </div>
    }
}

SimpleList.propTypes = {
    data: propTypes.object.isRequired,
    visible: propTypes.bool.isRequired,
    loading: propTypes.bool.isRequired,
    onVisibilityChange: propTypes.func.isRequired,
    filter: propTypes.string.isRequired,
    onFilterChanged: propTypes.func.isRequired,
    onPick: propTypes.func.isRequired,
    menuIconFold: propTypes.string.isRequired,
    menuIconUnfold: propTypes.string.isRequired,
    menuButtonStyle: propTypes.object.isRequired,
    menuIconStyle: propTypes.object.isRequired
};

SimpleList.defaultProps = {
    menuIconFold: 'menu-fold',
    menuIconUnfold: 'menu-unfold',
    visible: true,
    menuButtonStyle: {
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)",
        bottom: "5px",
        left: "5px",
        padding: 0
    },
    menuIconStyle: {
        fontSize: 30,
        color: "rgba(255, 247, 247, 0.88)"
    }
};