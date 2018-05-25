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
        const data = [
            {
                href: '/api/v1/private/app',
                title: 'Hots Forecast v 1.0.0',
                description: 'Первая сборка оффлайн версии предсказателя для Windows.',
                require: ['Windows 7 или выше', '.NET Framework 4.6.1 ил выше'],
                hash: [
                    {
                        type: 'MD5',
                        value: 'D5ABEF23B68448B785ABFBB4078707C2'
                    },
                    {
                        type: 'SHA1',
                        value: '506058F08EA3BD2707E494A3F4BE25F174D0319D'
                    },
                    {
                        type: 'SHA256',
                        value: '26F84D76BF87416273218C77EC9E7A2A44EEBF5824E5F601F45AE6A234DACE7F'
                    }
                ],
                size: 9145000,
                date: new Date(2015, 4, 25)
            }
        ];
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
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                    />
                    <div>
                        <Collapse defaultActiveKey={['1']}>
                            <Panel showArrow={false} header="Требования" key="1">
                                <ul>
                                    {
                                        item.require.map(x => {
                                            return <li>{x}</li>
                                        })
                                    }
                                </ul>
                            </Panel>
                            <Panel showArrow={false} header="Контрольные суммы" key="2">
                                <div>
                                    {
                                        item.hash.map(x => {
                                            return <Field label={x.type} value={x.value}/>
                                        })
                                    }
                                </div>
                            </Panel>
                        </Collapse>
                        <div style={{display: "flex", justifyContent: "space-between", margin: "3% 5px"}}>
                            <Field label="Дата" value={item.date.toLocaleDateString()}/>
                            <Field label="Размер" value={(item.size / 1000000) + 'MB'}/>
                        </div>
                        <a href={item.href}>
                            <Button type="primary" icon="download" size='large'>Скачать</Button>
                        </a>
                    </div>
                </List.Item>
            )}
        />
    }
}