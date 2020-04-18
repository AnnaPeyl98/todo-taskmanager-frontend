import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import Task from "../../components/task/Task";
import ButtonSortedDone from "../../components/sort/done/ButtonSortedDone";
import './style.css';

import getTaskList from "../../actions/tasksList/getTaskList";
import updateTaskById from "../../actions/tasksList/updateTaskById";
import removeTaskById from "../../actions/tasksList/removeTaskById";
import whoami from "../../actions/user/whoami";
class Done extends React.Component {
    componentDidMount() {
        if (!this.props.isAuthorized) {
            this.props.history.replace("/signin");
        }

        this.props.whoami();
        this.props.getTaskList("done");
    }

    onClickChangeTaskStatus = (id) => {
        this.props.updateTaskById(id)
            .then(
                () => this.props.getTaskList("done")
            );
    };
    onClickDeleteTask = (id) => {
        this.props.removeTaskById(id)
            .then(
                () => this.props.getTaskList("done")
            );
    };

    renderList = () => {
        return this.props.tasks.map((item) => {
            return (
                <Task key={item.id}
                      id={item.id}
                      title={item.text}
                      status={item.status}
                      onClickChangeTaskStatus={
                          () => this.onClickChangeTaskStatus(item.id)
                      }
                      onClickDeleteTask={
                          () => this.onClickDeleteTask(item.id)
                      }
                />
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                <ButtonSortedDone/>
                {this.renderList()}
            </React.Fragment>
        );
    };
};
const mapStateToProps = (state) => {
    return {
        tasks: state.taskListReducer.tasks,
        isAuthorized: state.userReducer.isAuthorized
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getTaskList: bindActionCreators(getTaskList, dispatch),
        updateTaskById: bindActionCreators(updateTaskById, dispatch),
        removeTaskById: bindActionCreators(removeTaskById, dispatch),
        whoami: bindActionCreators(whoami, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Done);