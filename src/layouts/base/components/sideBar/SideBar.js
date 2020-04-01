import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import {countDone, countToDo} from "../../../../pages/home/CountTasks";
export default class SideBar extends React.Component {
    render() {
        const { className } = this.props;

        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>
                <a className='side-bar__title'>
                    <div className='side-bar__title_todo'>
                    </div>
                    <span className=' side-bar__title_text side-bar__title_text-active'>
                        To Do ({countToDo()})
                    </span>
                </a>
                <a className='side-bar__title'>
                    <div className='side-bar__title_done'>
                    </div>
                    <span className='side-bar__title_text'>
                        Done ({countDone()})
                    </span>
                </a>
            </aside>
        );
    };
};

SideBar.propTypes = {
    className: PropTypes.string
};

SideBar.defaultProps = {
    className: ''
};