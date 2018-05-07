/**
 * Created by Denis on 07.05.2018.
 */
/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"
import Field from "../Common/Field";

export default class SecondsField extends Component {
    render() {
        const {label, value} = this.props;
        let date = new Date(null);
        date.setSeconds(value); // specify value for SECONDS here
        let time = date.toISOString().substr(11, 8);
        return value !== undefined
            ? <Field label={label} value={time}/>
            : null
    }
}

SecondsField.propTypes = {
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
};
