import React from 'react';
import ReactDOM from 'react-dom';
import Base from './layouts/base/Base';
import ToDo from "./pages/todo/ToDo";
import Done from "./pages/done/Done";
import './index.css';

ReactDOM.render(
    <Base>
        <ToDo/>
    </Base>,
    document.getElementById('root')
);
