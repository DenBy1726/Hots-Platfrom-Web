/**
 * Created by Denis on 02.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"
import {Avatar, List} from "antd";

export default class HeroList extends Component {
    render() {
        const {
            grid, data, pickedStyle, defaultStyle, loading,
            imageStyleName, overlayStyleName, useOverlay,
            overlayText, onOverlayClick, containerStyleName
        } = this.props;
        return <List
            grid={grid}
            loading={loading}
            dataSource={data}
            emptyText=""
            renderItem={item => {
                let style = item.picked === true
                    ? pickedStyle
                    : defaultStyle;
                return <List.Item>
                    <div className={containerStyleName}>
                        <Avatar
                            className={imageStyleName}
                            style={style}
                            onClick={() => this.props.onClick(item)}
                            size="large"
                            src={item.iconurl}/>
                        { useOverlay === true ?
                            <div className={overlayStyleName} onClick={() => onOverlayClick(item)}>
                                {overlayText}
                            </div> : null
                        }
                    </div>
                </List.Item>
            }}
        />
    }
}

HeroList.propTypes = {
    data: propTypes.array.isRequired,
    grid: propTypes.object.isRequired,
    onClick: propTypes.func.isRequired,
    loading: propTypes.bool.isRequired,
    overlayStyleName: propTypes.string.isRequired,
    imageStyleName: propTypes.string.isRequired,
    useOverlay: propTypes.bool.isRequired,

    pickedStyle: propTypes.object.isRequired,
    defaultStyle: propTypes.object.isRequired,
};

HeroList.defaultProps = {
    grid: {gutter: 16, column: 6},
    pickedStyle: {
        cursor: "pointer",
        borderRadius: "20px",
        border: "2px solid #9393f5",
        boxShadow: "0 0 25px 15px #3e31f5"
    },
    defaultStyle: {
        cursor: "pointer",
        borderRadius: "20px",
        border: "2px solid #7c7ff5",
        boxShadow: "0px 0px 5px rgb(69, 56, 255)",
    },
    useOverlay: false,
    overlayText: 'Перейти'
};