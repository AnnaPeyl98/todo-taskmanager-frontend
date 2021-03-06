import React from 'react';
import "./style.css"
export default class ButtonSortedTodo extends React.Component {
    state = {
        type: -1,
        classButtonText : "sorted-button__text_disable",
        classButtonIcon : "sorted-button__icon_disable"
    }
    onBtnClickHandler = (e) => {
        e.preventDefault()
        const {type} = this.state
        if (type===-1||type===1) {
            this.setState({ type: 0 })
            this.setState({ classButtonText: "sorted-button__text_less" })
            this.setState({ classButtonIcon: "sorted-button__icon_less" })
        } else {
            this.setState({ type: 1 })
            this.setState({ classButtonText: "sorted-button__text_more" })
            this.setState({ classButtonIcon: "sorted-button__icon_more" })
        }

    }

    render() {
        const {classButtonText, classButtonIcon} = this.state
        return (
            <React.Fragment>
                <button className="sorted-button" onClick={this.onBtnClickHandler} >
                    <div className={classButtonIcon}>
                    </div>
                    <span className={classButtonText}>
                        Sort by creation date
                    </span>
                </button>
            </React.Fragment>
        );
    }
}