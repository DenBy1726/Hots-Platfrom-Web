/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import Field from "../Common/Field";

export default class StatPanel extends Component {
    render() {
        const {hero} = this.props;
        return <div style={{display: "flex", flexWrap: "wrap", fontSize: "1.1em"}}>
            <div style={{marginRight: "5%"}}>
                <Field label="Здоровье:" value={hero.health}/>
                <Field label="Регенерация здоровья:" value={hero.healthregen}/>
                {
                    hero.resourcetype.id > 1
                        ? <Field label={`Количество ${hero.resourcetype.name}:`} value={hero.resource}/>
                        : null
                }
            </div>
            <div style={{marginRight: "5%"}}>
                <Field label="Магическая защита:" value={hero.spellarmor}/>
                <Field label="Физическая защита:" value={hero.physicalarmor}/>
            </div>
            <div style={{marginRight: "5%"}}>
                <Field label="Сила атаки:" value={hero.attackdamage}/>
                <Field label="Скорость атаки:" value={hero.attackspeed}/>
                {
                    hero.melee === true ?
                        <Field label={`Ближний бой ${hero.resourcetype.name}:`} value=""/>
                        :
                        <Field label="Дальность атаки" value={hero.attackrange}/>
                }
            </div>
        </div>
    }
}