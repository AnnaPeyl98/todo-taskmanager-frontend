import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import Task from '../../components/task/Task';


import './style.css';
import ButtonCreate from "../../components/buttons/create/ButtonCreate";
import ButtonUpload from "../../components/buttons/upload/ButtonUpload";
import ButtonSortedTodo from "../../components/sort/todo/ButtonSortedTodo";
import FormField from "../../components/buttons/form/FormField";

import getTaskList from "../../actions/tasksList/getTaskList";
import addNewTask from "../../actions/tasksList/addNewTask";
import updateTaskById from "../../actions/tasksList/updateTaskById";
import removeTaskById from "../../actions/tasksList/removeTaskById";
import whoami from "../../actions/user/whoami";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    };

    componentDidMount() {
        if (!this.props.isAuthorized) {
            this.props.history.replace("/signin");
        }
        this.props.whoami();
        this.props.getTaskList("inbox");
    }
    onClickChangeTaskStatus = (id) => {
        this.props.updateTaskById(id, {
            status: "done"
        })
            .then(
                () => this.props.getTaskList("inbox")
            );
    };
    onClickDeleteTask = (id) => {
        this.props.removeTaskById(id)
            .then(
                () => this.props.getTaskList("inbox")
            );
    };
    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };
    onSubmit = (event) => {
        event.preventDefault();

        this.props.addNewTask({
            text: this.state.value
        }).then(
            () => this.props.getTaskList("inbox")
        );

        this.setState({
            value: ""
        })
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
                <form
                    className="form-create"
                    onSubmit={this.onSubmit}
                >
                    <FormField
                        value={this.state.value}
                        onChange={this.onChange}/>
                    <ButtonCreate
                        disabled={this.state.value.length === 0}/>
                </form>
                <ButtonUpload/>
                <ButtonSortedTodo/>
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
        addNewTask: bindActionCreators(addNewTask, dispatch),
        updateTaskById: bindActionCreators(updateTaskById, dispatch),
        removeTaskById: bindActionCreators(removeTaskById, dispatch),
        whoami: bindActionCreators(whoami, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);