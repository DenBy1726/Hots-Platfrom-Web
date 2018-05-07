/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"

export default class Field extends Component {
    render() {
        const {label, value} = this.props;
        return <div style={{
            minWidth: "200px",
            display: "flex",
            justifyContent: "space-between",
        }}>
                    <span style={{color: "#1890ff"}}>
                        {label}
                    </span>
            {value}
        </div>
    }
}

Field.propTypes = {
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired
};