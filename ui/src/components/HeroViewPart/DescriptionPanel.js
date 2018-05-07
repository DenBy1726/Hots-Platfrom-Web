/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import {Icon} from "antd";

export default class DescriptionPanel extends Component {
    render() {
        const {hero} = this.props;
        return <div style={{fontSize: "1.25em", width: "100%"}}>
            <div style={{display: "flex", flexDirection: "column", alignSelf: "center"}}>
                <div style={{fontSize: "2em", textAlign: "center"}}>
                    <span style={{textShadow: "0 0 1rem #009cff"}}> {hero.name}</span>
                </div>
                <div style={{fontSize: "1.25em", textAlign: "center"}}>
                    {hero.title}
                </div>
            </div>
            <div style={{alignSelf: "center", margin: "0 20px"}}>
                {hero.lore}
            </div>
            <div style={{margin: "0 20px", color: "#1890ff"}}>
                Особенности:
            </div>
            <div>
                <ul>
                    {
                        hero.info.split(/[,.]+/).filter(x => x.length !== 0)
                            .map(feature => {
                                return <li>
                                    {feature}
                                </li>
                            })
                    }
                </ul>
            </div>
            <div style={{display:"flex"}}>
                <div>
                    <span style={{margin: "0 20px", color: "#1890ff"}}>
                        Сложность:
                    </span>
                    {hero.difficulty.name}
                </div>
                <div style={{margin: "0 auto"}}>
                    <span style={{margin: "0 20px", color: "#1890ff"}}>
                        Дата добавления:
                    </span>
                    {new Date(hero.date).toLocaleDateString()}
                </div>
            </div>
        </div>
    }
}