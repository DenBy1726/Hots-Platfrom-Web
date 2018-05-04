/**
 * Created by Denis on 04.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"
import {Avatar, Popover} from "antd";

export default class HeroDataView extends Component {
    render() {
        const {hero} = this.props;
        return <div style={{marginLeft: "10px", display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column", marginTop: "10px"}}>
                    <div style={{width: "300px", maxHeight: "300px"}}>
                        <Avatar style={{width: "100%", height: "100%", overflow: "hidden"}} src={hero.imageurl}/>
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Popover style={{backgroundColor:"transparent"}} content={hero.franchise.name} title="Вселенная">
                            <img width="50px" height="50px" src={`/Universe/${hero.franchise.name}.png`}/>
                        </Popover>
                        <Popover style={{backgroundColor:"transparent"}} content={hero.group.name} title="Роль">
                            <img width="50px" height="50px" src={`/Role/${hero.group.name}.png`}/>
                        </Popover>
                        <Popover style={{backgroundColor:"transparent"}} content={hero.subgroup.name} title="Стиль игры">
                            <img width="50px" height="50px" src={`/SubRole/${hero.subgroup.name}.png`}/>
                        </Popover>

                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", fontSize: "1.25em", width: "100%"}}>
                    <div style={{display: "flex", flexDirection: "column", alignSelf: "center"}}>
                        <div style={{fontSize: "2em", textAlign: "center"}}>
                            {hero.name}
                        </div>
                        <div style={{fontSize: "1.25em", textAlign: "center"}}>
                            {hero.title}
                        </div>
                    </div>
                    <div style={{alignSelf: "center", margin: "0 20px"}}>
                        {hero.lore}
                    </div>
                    <div style={{margin: "0 20px", color: "rgba(69, 56, 255,0.88)"}}>
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
                </div>
            </div>

        </div>
    }
}

HeroDataView.propTypes = {
    hero: propTypes.object.isRequired
};