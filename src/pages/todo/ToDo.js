import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import getTaskList from "../../actions/tasksList/getTaskList";
import Task from '../../components/task/Task';

import list from '../../../public/mockapi/getInboxTaskList';

import './style.css';
import ButtonCreate from "../../components/buttons/create/ButtonCreate";
import ButtonUpload from "../../components/buttons/upload/ButtonUpload";
import ButtonSortedTodo from "../../components/sort/todo/ButtonSortedTodo";
import FormField from "../../components/buttons/form/FormField";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "0",
            value: '',
            status: 'inbox',
            itemList: list.taskList
        };
    };

    componentDidMount() {
        this.props.getTaskList("inbox");
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            itemList: [
                {
                    id: this.state.id,
                    status: this.state.status,
                    text: this.state.value
                },
                ...this.state.itemList
            ],
            value: ''

        });
        console.log(this.state.id)
    };
    renderList = () => {
        return this.props.taskList.map((item) => {
            return (
                <Task key={item.id} id={item.id} title={item.text} status={item.status}/>
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
        taskList: state.taskListReducer.taskList
    }
};

const mapDispatchToProps = (dispatch) => ({
    getTaskList: bindActionCreators(getTaskList, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);