import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import './style.css';


export default class SideBar extends React.Component {
    render() {
        const {className} = this.props;

        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>

                    <NavLink exact to={'/'} className='side-bar__title' activeClassName={"side-bar__title_active"}>

                        <div className='side-bar__title_todo'>
                        </div>
                        <span className=' side-bar__title_text'>
                        To Do ({})
                    </span>
                    </NavLink>

                    <NavLink to={'/done'} className='side-bar__title' activeClassName={"side-bar__title_active"}>
                        <div className='side-bar__title_done'>
                        </div>
                        <span className='side-bar__title_text'>
                        Done ({})
                    </span>
                    </NavLink>

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