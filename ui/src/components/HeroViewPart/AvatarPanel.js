/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import {Avatar, Icon, Popover} from "antd";
import goldToGems from "../../mappers/goldToGems";

export default class AvatarPanel extends Component {
    render() {
        const {hero} = this.props;
        return <div style={{display: "flex", flexDirection: "column", marginTop: "10px"}}>
            <div style={{width: "300px", maxHeight: "300px"}}>
                <Avatar style={{width: "100%", height: "100%", overflow: "hidden"}} src={hero.imageurl}/>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <Popover style={{backgroundColor: "transparent"}} content={hero.franchise.name}
                         title="Вселенная">
                    <img width="50px" height="50px" src={`/Universe/${hero.franchise.name}.png`}/>
                </Popover>
                <Popover style={{backgroundColor: "transparent"}} content={hero.group.name} title="Роль">
                    <img width="50px" height="50px" src={`/Role/${hero.group.name}.png`}/>
                </Popover>
                <Popover style={{backgroundColor: "transparent"}} content={hero.subgroup.name}
                         title="Стиль игры">
                    <img width="50px" height="50px" src={`/SubRole/${hero.subgroup.name}.png`}/>
                </Popover>
                <Popover style={{backgroundColor: "transparent"}} content={hero.resourcetype.name}
                         title="Используемый ресурс">
                    <img width="50px" height="50px" src={`/Resource/${hero.resourcetype.name}.png`}/>
                </Popover>
                <div style={{display: "flex", flexFlow: "column",margin: "0 auto"}}>
                    <span className="price-gold">{hero.price}</span>
                    <span className="price-gems">{goldToGems(hero.price)}</span>
                </div>
            </div>
        </div>
    }
}