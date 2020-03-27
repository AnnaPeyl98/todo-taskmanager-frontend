import React from 'react';

import './style.css';
import logo from "./logo_header.svg"
export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__content'>
                    <a className='header__logo' href='/'>
                        <img src={logo} width="128px" height="25px" alt="Eise Task"/>
                    </a>
                </div>
            </header>
        );
    };
};