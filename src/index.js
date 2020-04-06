import React from 'react';
import ReactDOM from 'react-dom';
import Base from './layouts/base/Base';
import {BrowserRouter, Route} from "react-router-dom";
import ToDo from "./pages/todo/ToDo";
import Done from "./pages/done/Done";
import {Provider} from 'react-redux'
import store from './store/store'
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Base>
                <Route exact path='/' component={ToDo}/>
                <Route path='/done' component={Done}/>
            </Base>
        </BrowserRouter>
    </Provider>,
document.getElementById('root')
);
