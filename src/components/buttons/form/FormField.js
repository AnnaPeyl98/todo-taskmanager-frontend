import React from "react";
import PropTypes from 'prop-types'

export default class FormField extends React.Component {
    render() {
        const {value, onChange} = this.props
       return( <input
            type="text"
            className="task-text"
            placeholder="Type your new task"
            onChange={onChange}
            value={value}/>
       );

    };
};
FormField.defaultProps = {
    name:'',
    onChange: () => {}
};
FormField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};