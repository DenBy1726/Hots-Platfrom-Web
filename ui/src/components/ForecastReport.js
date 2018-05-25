/**
 * Created by Denis on 22.05.2018.
 */
import React, {Component} from "react"
import Field from "./Common/Field";
import DoubleField from "./FieldTemplate/DoubleField";
import DescriptionField from "./FieldTemplate/DescriptionField";

export default class ForecastReport extends Component {
    render() {
        const {report} = this.props;
        return <div style={{
            display: "flex", flexDirection: "column", margin: "5% 5% 0 5%",
            justifyContent: "space-around", fontSize: "1.2em"
        }}>
            <Field label="Знаний были обновлены:" value={new Date(report.key.dataset.date).toLocaleDateString()}/>
            <Field label="Имя модели:" value={report.key.meta.alias}/>
            <DescriptionField label="Описание:" value={report.key.meta.description}/>
            <div style={{borderTop: "2px solid rgba(69, 56, 255, 0.5)", boxShadow: "inset 0 3px 0 0 rgb(69, 56, 255)"}}>
                <DoubleField label="Вероятность победы команды 1:" value={report.value * 100} round={2}/>
            </div>
        </div>
    }
}