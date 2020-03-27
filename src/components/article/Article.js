import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Article extends React.Component {
    render() {
        return (
            <article className="article">
                <label>
                <input type="radio" className="article__radio" name="task"/>
                <span className="article__text">{this.props.text}</span>
                </label>
            </article>
        );
    };
};

Article.propTypes = {
    text: PropTypes.string
};

Article.defaultProps = {
    text: ''
};