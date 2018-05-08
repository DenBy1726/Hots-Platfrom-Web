/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import Field from "../Common/Field";
import DoubleField from "../FieldTemplate/DoubleField";

export default class StatPanel extends Component {
    render() {
        const {hero} = this.props;
        return <div style={{display: "flex", flexWrap: "wrap", fontSize: "1.1em"}}>
            <div style={{marginRight: "5%"}}>
                <Field label="Здоровье:" value={hero.health}/>
                <DoubleField label="Регенерация здоровья:" value={hero.healthregen} round={2}/>
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
                        <Field label={`Ближний бой`} value=""/>
                        :
                        <Field label="Дальность атаки" value={hero.attackrange}/>
                }
            </div>
        </div>
    }
}