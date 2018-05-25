import React, {Component} from "react"
import {
    LineChart, Line, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, Label,
    LabelList
} from "recharts"

const data = [
    {pv: 2400, amt: 2400},
    {pv: 1398, amt: 2210},
    {pv: 9800, amt: 2290},
    {pv: 3908, amt: 2000},
    {pv: 4800, amt: 2181},
    {pv: 3800, amt: 2500},
    {pv: 4300, amt: 2100},
];

class CustomizedDot extends Component {
    render() {
        const {cx, cy, stroke, payload, value} = this.props;

        return <g transform={`translate(${cx - 44},${cy - 15})`}>
            <image xlinkHref={'/Role/Assassin.png'} x={0} y={0} height="31px" width="88px" textAnchor="middle" fill="#666"/>
        </g>
    }
}


export default class SimpleLineChart extends Component {
    render() {
        return (
            <div style={{alignSelf: "center", margin: "3%"}}>
                <LineChart width={600} height={300} data={data}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={<CustomizedDot />}/>
                </LineChart>
            </div>
        );
    }
}
