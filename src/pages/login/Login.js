import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


import './style.css';

import signIn from "../../actions/user/signIn";
import siteLogo from './images/logo.svg';
import Button from "../../components/baseButton/Button";
import FormInput from "../../components/formInput/FormInput";
import OtherAuthenticate from "../../layouts/plain/components/otherAuthenticate/OtherAuthenticate";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }
    checkAuthorized = () => {
        if (this.props.isAuthorized) {
            this.props.history.replace("/");
        }
    };

    componentDidMount() {
        if (this.props.isAuthorized) {
            this.props.history.replace("/");
        }
    }

    componentDidUpdate() {
        if (this.props.isAuthorized) {
            this.props.history.replace("/");
        }
    }

    onUsernameChange = (event) => {
        this.setState({
                username: event.target.value
            }
        );
    };

    onPasswordChange = (event) => {
        this.setState({
                password: event.target.value
            }
        );
    };

    formFilled = () => {
        return this.state.username.length !== 0
            && this.state.password.length !== 0;
    };


    usernameStyleClass = () => {
        const error = this.props.error;
        const username = this.state.username;
        console.log(error === null || username.length > 0)
        return error === null || username.length > 0
            ? ""
            : "invalid-username-field";
    };

    passwordStyleClass = () => {
        const error = this.props.error;
        const password = this.state.password;
        return error === null || password.length > 0
            ? ""
            : "invalid-password-field";
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            username: "",
            password: ""
        });
        const username = event.target['E-mail'].value;
        const password = event.target['Password'].value;

        this.props.login(username, password);
    };
    render() {
        return (
            <form
                className={"login-form"}
                onSubmit={this.handleSubmit}
            >
                <img
                    className={"login-form__site-logo"}
                    src={siteLogo}
                    alt={"Eise Tasks"}
                />
                    <FormInput
                        className={`login-form__field ${this.usernameStyleClass()}`}
                        name={"E-mail"}
                        placeholder={"E-mail"}
                        type={"text"}
                        onChange={this.onUsernameChange}
                    />
                    <FormInput
                        className={`login-form__field ${this.passwordStyleClass()}`}
                        name={"Password"}
                        placeholder={"Password"}
                        type={"password"}
                        onChange={this.onPasswordChange}
                    />
                    <Button
                        className={"login-form__button button"}
                        type={"submit"}
                        disabled={!this.formFilled()}
                        value={"Log in"}
                    />
                <OtherAuthenticate
                    className={"login-form"}
                    title={"Don't have an account?"}
                    buttonTitle={"Sign up"}
                    url={'/signup'}
                />

            </form>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.userReducer.isAuthorized,
        error: state.userReducer.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(signIn, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);