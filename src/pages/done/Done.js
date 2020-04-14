import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import getTaskList from "../../actions/tasksList/getTaskList";
import Task from "../../components/task/Task";
import ButtonSortedDone from "../../components/sort/done/ButtonSortedDone";
import './style.css';

class Done extends React.Component {
    componentDidMount() {
        this.props.getTaskList("done");
    }
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
                <ButtonSortedDone/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        getTaskList: bindActionCreators(getTaskList, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Done);