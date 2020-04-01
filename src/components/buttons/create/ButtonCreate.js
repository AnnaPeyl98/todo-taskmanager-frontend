import React from 'react';
import "./style.css"
/*Блокировка форм документа*/
export default class ButtonCreate extends React.Component {
    state = {
        text : ''
    }
    handleChange = (e) => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: value })
    }
    onBtnClickHandler = (e) => {
        e.preventDefault()
    }
    validate = () => {
        const { text } = this.state
        if (text.trim()) {
            return true
        }
        return false
    }
    render() {
        const {text} = this.state
        return (
            <React.Fragment>
                <input id="text" type="text" className="task-text" placeholder="Type your new task" onChange={this.handleChange} value={text}/>
                <button className="create-button create-button_available" onClick={this.onBtnClickHandler} disabled={!this.validate()} >
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
