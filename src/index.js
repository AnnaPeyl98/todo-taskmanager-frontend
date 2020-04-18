import React from 'react';
import ReactDOM from 'react-dom';
import Base from './layouts/base/Base';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ToDo from "./pages/todo/ToDo";
import Done from "./pages/done/Done";
import {Provider} from 'react-redux'
import store from './store/store'
import './index.css';
import PlainLayout from "./layouts/plain/PlainLayout";
import Login from './pages/login/Login';
import SignUp from "./pages/signup/SignUp";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path={'/signin'} render={() => {
                    return (
                        <PlainLayout>
                            <Route exact path={'/signin'} component={Login}/>
                        </PlainLayout>
                    )
                }}/>
                <Route path={'/signup'} render={() => {
                    return (
                        <PlainLayout>
                            <Route exact path={'/signup'} component={SignUp}/>
                        </PlainLayout>
                    )
                }}/>
                <Route path={'/'} render={() => {
                    return (
                        <Base>
                            <Route exact path='/' component={ToDo}/>
                            <Route path='/done' component={Done}/>
                        </Base>)
                }}/>

            </Switch>
        </BrowserRouter>


    </Provider>,
    document.getElementById('root')
)
;
