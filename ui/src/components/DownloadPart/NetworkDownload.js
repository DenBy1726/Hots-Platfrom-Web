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

export default class NetworkDownload extends Component {
    render() {
        const {data} = this.props;
        return <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[<IconText type="star-o" text="156"/>, <IconText type="like-o" text="156"/>,
                        <IconText type="message" text="2"/>]}
                >
                    <List.Item.Meta
                        title={
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <a href={`/api/v1/private/networks/${item.id}`}>{`${item.meta.name} (${item.meta.alias})`}</a>
                                {
                                    item.isbest ?
                                    <IconText type="star-o" text="Лучшая на тестовой выборке"/>
                                    : null
                                }
                            </div>
                        }
                        description={item.meta.description}
                    />
                    <div>
                        <Collapse defaultActiveKey={['0']}>
                            <Panel showArrow={false} header="Результаты обучения: " key="1">
                                <DoubleField label="Эпох обучения" value={item.state.iteration} round={1}/>
                                <DoubleField label="Ошибка (обучение)" value={item.state.error} round={3}/>
                                <DoubleField label="Процент успешного прогнозирования (обучение)"
                                             value={item.state.percent * 100} round={2}/>
                                <DoubleField label="Ошибка (тестирование)" value={item.state.validerror} round={3}/>
                                <DoubleField label="Процент успешного прогнозирования (тестирование)"
                                             value={item.state.validpercent * 100} round={2}/>
                            </Panel>
                        </Collapse>
                        <div style={{display: "flex", justifyContent: "space-between", margin: "3% 5px"}}>
                            <Field label="Дата" value={item.dataset.date}/>
                        </div>
                        <a href={`/api/v1/private/networks/${item.id}`}>
                            <Button type="primary" icon="download" size='large'>Скачать</Button>
                        </a>
                    </div>
                </List.Item>
            )}
        />
    }
}