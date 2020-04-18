import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import logo from "./logo_header.svg"
export default class Header extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <header className='header'>
                <div className='header__content'>
                    <a className='header__logo' href='/'>
                        <img src={logo} width="128px" height="25px" alt="Eise Task"/>
                        <a className="header__user user" href="/">{user}</a>
                    </a>
                </div>
            </header>
        );
    };
};
Header.propTypes = {
    user: PropTypes.string.isRequired
};

Header.defaultProps = {
    user: ""
};