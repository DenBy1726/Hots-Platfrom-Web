/**
 * Created by Denis on 22.05.2018.
 */
import React, {Component} from "react"
import {Avatar} from "antd";
import {
    BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, Label,
    LabelList
} from "recharts"

/*const CustomizedLabel = (props) => {

    const {x, y, fill, value} = props;
    console.log(props);
    return <g transform={`translate(${x - 44},${y})`}>
        <image xlinkHref={'/Role/Assassin.png'} x={0} y={0} height="31px" width="88px" textAnchor="middle" fill="#666"/>
    </g>
};*/

export class SimpleBarChart extends Component {

    render() {
        const {width,height,data} = this.props;
        return (
            <div style={{alignSelf: "center", margin: "3%"}}>
                <BarChart width={width} height={height} data={data}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    {/*<XAxis dataKey="name" interval={0} height={60} tick={CustomizedLabel}/>*/}
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="pv" fill="#8884d8"/>
                    <Bar dataKey="uv" fill="#82ca9d"/>
                </BarChart>
            </div>
        );
    }
}