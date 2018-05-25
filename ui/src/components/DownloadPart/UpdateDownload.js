/**
 * Created by Denis on 25.05.2018.
 */
import React, {Component} from "react"
import {Button, Collapse, Icon, List} from "antd";
import Field from "../FieldTemplate/DescriptionField";
import DoubleField from "../FieldTemplate/DoubleField";
const Panel = Collapse.Panel;

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

export default class AppDownload extends Component {
    render() {
        const {data} = this.props;
        return <List
            itemLayout="vertical"
            size="large"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <div style={{display: "flex", justifyContent: "space-between", margin: "3% 5px"}}>
                        <Field label="Дата:" value={item.date.toLocaleDateString()}/>
                        <a href={`/api/v1/private/dateset/${item.id}`}>
                            <Button type="primary" icon="download" size='large'>Скачать</Button>
                        </a>
                    </div>
                </List.Item>
            )}
        />
    }
}