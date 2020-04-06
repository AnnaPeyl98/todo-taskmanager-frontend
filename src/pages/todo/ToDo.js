import React from 'react';

import Task from '../../components/task/Task';

import list from './list';

import './style.css';
import ButtonCreate from "../../components/buttons/create/ButtonCreate";
import ButtonUpload from "../../components/buttons/upload/ButtonUpload";
import ButtonSortedTodo from "../../components/sort/todo/ButtonSortedTodo";
import FormField from "../../components/buttons/form/FormField";

export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"0",
            value: '',
            status: 'inbox',
            itemList: list.data
        };
    };

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            itemList: [
                {   id: this.state.id,
                    status: this.state.status,
                    text: this.state.value
                },
                ...this.state.itemList
            ],
            value:''

        });
        console.log(this.state.id)
    };
    renderList = () => {
        return this.state.itemList.map((item) => {
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
                disabled = {this.state.value.length===0}/>
                </form>
                <ButtonUpload/>
                <ButtonSortedTodo/>
                {this.renderList()}
            </React.Fragment>
        );
    };
};
