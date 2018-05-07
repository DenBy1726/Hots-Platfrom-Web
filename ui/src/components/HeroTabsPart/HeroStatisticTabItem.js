/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import Field from "../Common/Field";
import CenterField from "../FieldTemplate/CenterField";
import DoubleField from "../FieldTemplate/DoubleField";
import SecondsField from "../FieldTemplate/SecondsField";


export default class HeroStatisticTabItem extends Component {
    render() {
        const {data} = this.props;
        return <div>
            <CenterField
                label={`Статистика была расчитана на основании ${data.count} повторов`}
                value={data.count}/>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div style={{marginRight: "5%"}}>
                    <CenterField
                        label="В секунду"
                        value={true}/>
                    <DoubleField label="Убийств:"  value={data.killpersec} round={3}/>
                    <DoubleField label="Помощи:" value={data.assistpersec} round={3}/>
                    <DoubleField label="Смертей:" value={data.deathpersec} round={3}/>
                    <DoubleField label="Урона по героям:" value={data.dps} round={3}/>
                    <DoubleField label="Исцеления:" value={data.hps} round={3}/>
                    <DoubleField label="Урона по фортам:" value={data.sdps} round={3}/>
                    <DoubleField label="Получено урона:" value={data.damagetakenpersec} round={3}/>
                    <DoubleField label="Опыта:" value={data.exppersec} round={3}/>
                    <DoubleField label="Взято лагерей:" value={data.camptakenpersec} round={3}/>
                </div>
                <div style={{marginRight: "5%"}}>
                    <CenterField
                        label="Сумарно"
                        value={true}/>
                    <DoubleField label="Убийств:"  value={data.killpersec * data.sec} round={3}/>
                    <DoubleField label="Помощи:" value={data.assistpersec * data.sec} round={3}/>
                    <DoubleField label="Смертей:" value={data.deathpersec * data.sec} round={3}/>
                    <DoubleField label="Урона по героям:" value={data.dps * data.sec} round={3}/>
                    <DoubleField label="Исцеления:" value={data.hps * data.sec} round={3}/>
                    <DoubleField label="Урона по фортам:" value={data.sdps * data.sec} round={3}/>
                    <DoubleField label="Получено урона:" value={data.damagetakenpersec * data.sec} round={3}/>
                    <DoubleField label="Опыта:" value={data.exppersec * data.sec} round={3}/>
                    <DoubleField label="Взято лагерей:" value={data.camptakenpersec * data.sec} round={3}/>
                </div>
                <div style={{marginRight: "5%"}}>
                    <CenterField
                        label="Рейтинги"
                        value={true}/>
                    <DoubleField label="Убийцы:"  value={data.assassinrating} round={2}/>
                    <DoubleField label="Бойца:" value={data.warriorrating} round={2}/>
                    <DoubleField label="Поддержки:" value={data.supportrating} round={2}/>
                    <DoubleField label="Специалиста:" value={data.specialistrating} round={2}/>
                </div>
                <div style={{marginRight: "5%"}}>
                    <CenterField
                        label="Общая"
                        value={true}/>
                    <DoubleField label="Процент побед:"  value={data.winrate * 100} round={2}/>
                    <SecondsField label="Длительность матча:" value={data.sec}/>
                </div>
            </div>
        </div>
    }
}