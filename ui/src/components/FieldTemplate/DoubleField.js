/**
 * Created by Denis on 07.05.2018.
 */
import React, {Component} from "react"
import propTypes from "prop-types"
import Field from "../Common/Field";

export default class DoubleField extends Component {
    render() {
        const {label, value, round} = this.props;
        const pow = Math.pow(10, round);
        return value !== undefined
            ? <Field label={label} value={Math.round(value * pow, round) / pow }/>
            : null
    }
}

DoubleField.propTypes = {
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    round: propTypes.number.isRequired
};