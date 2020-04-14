
import './style.css';
import {bindActionCreators} from "redux";
import getTaskList from "../../actions/tasksList/getTaskList";
import {connect} from "react-redux";
import React from 'react';
export class CountTasks extends React.Component {

    countToDo() {
        return this.props.getTaskList("inbox").length;
    }

    countDone() {
        return this.props.getTaskList("done").length;
    }
}