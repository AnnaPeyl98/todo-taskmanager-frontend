import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import MarkerButton from "../marker/MarkerButton";
import ToolButton from "../tool/ToolButton";


export default class Task extends React.Component {
/*    onClickMakeDone = () => {
        alert("done "+this.props.id);
    };
    onClickUpdate = () => {
        alert("update "+this.props.id);
    };
    onClickDelete = () => {
        alert("delete "+this.props.id);
    };*/
    render() {
        return (
            <article className="task">
                <MarkerButton
                    id={this.props.id}
                    className={this.props.status === "inbox" ? "checkbox" : "done-mark"}
                    onClick={this.props.onClickChangeTaskStatus}
                />

                <h3 className={"task__title"}>{this.props.title}</h3>

                <div className={"task__tools"}>
                    {this.props.status === "inbox" &&
                    <ToolButton id={this.props.id} className={"edit"} onClick={()=>{}}/>}

                    <ToolButton
                        id={this.props.id}
                        className={"delete"}
                        onClick={this.props.onClickDeleteTask}
                    />
                </div>
            </article>
        );
    };
};

Task.propTypes = {
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClickChangeTaskStatus: PropTypes.func,
    onClickDeleteTask: PropTypes.func
};

Task.defaultProps = {
    id: '',
    status: 'inbox',
    title: '',
    onClickDeleteTask:()=>{}
};
