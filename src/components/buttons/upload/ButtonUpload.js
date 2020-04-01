import React from 'react';
import "./style.css"
export default class ButtonUpload extends React.Component {
    render() {
        return (
            <React.Fragment>
                <button className="upload-button" >
                    <div className='upload-button__shape'>
                    </div>
                    <span className='upload-button__text'>
                        Upload CSV
                    </span>
                </button>
            </React.Fragment>
        );
    };
};