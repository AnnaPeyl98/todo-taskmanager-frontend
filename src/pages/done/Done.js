import React from 'react';
import { connect } from 'react-redux';
import Task from "../../components/task/Task";
import list from './list';
import ButtonSortedDone from "../../components/sort/done/ButtonSortedDone";
import './style.css';

class Done extends React.Component {
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
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Done);