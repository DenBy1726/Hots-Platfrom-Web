/**
 * Created by Denis on 22.05.2018.
 */
import React, {Component} from "react"
import SimpleSelect from "./Common/SimpleSelect";

export default class SelectGroup extends Component {
    render() {
        const {heroes, title} = this.props;
        return <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{margin: "10%", alignSelf: "center", fontSize: "1.5em"}}>
                {title}
            </div>
            {[1,1,1,1,1].map(x=>  <SimpleSelect data={heroes}   style={{width: "200px", margin: "7% 10%"}}
                                                placeholder="Выберите героя"/>)}
        </div>
    }
}