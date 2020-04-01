import React from 'react';

import Task from '../../components/task/Task';

import list from './list';

import './style.css';
import ButtonCreate from "../../components/buttons/create/ButtonCreate";
import ButtonUpload from "../../components/buttons/upload/ButtonUpload";
import ButtonSortedTodo from "../../components/sort/todo/ButtonSortedTodo";

export default class ToDo extends React.Component {
  renderList = () => {
    return list.data.map((item) => {
      return (
        <Task key={item.id} id={item.id} title={item.text} status={item.status}/>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <ButtonCreate/>
        <ButtonUpload/>
        <ButtonSortedTodo/>
        {this.renderList()}
      </React.Fragment>
    );
  };
};
