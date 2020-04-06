import React from 'react';
import PropTypes from 'prop-types'
import "./style.css"
export default class ButtonCreate extends React.Component {
    render() {
        const {disabled} = this.props
        return (
            <React.Fragment>
                <button className="create-button create-button_available" type="submit" disabled={disabled}>
                    <div className='create-button__shape'>
                    </div>
                    <span className='create-button__text'>
                        Create
                    </span>
                </button>
            </React.Fragment>
        );
    };
};
ButtonCreate.defaultProps ={
    disabled: false
}
ButtonCreate.propTypes = {
    disabled: PropTypes.bool
}