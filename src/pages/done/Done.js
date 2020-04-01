import React from 'react';
import Task from "../../components/task/Task";
import list from './list';
import ButtonSortedDone from "../../components/sort/done/ButtonSortedDone";
import './style.css';

export default class Done extends React.Component {
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
                <ButtonSortedDone/>
                {this.renderList()}
            </React.Fragment>
        );
    };
};