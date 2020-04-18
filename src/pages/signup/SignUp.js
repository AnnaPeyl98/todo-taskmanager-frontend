import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


import './style.css';
import siteLogo from './images/logo.png';

import signIn from "../../actions/user/signIn";
import register from "../../actions/user/register";
import Button from "../../components/baseButton/Button";
import FormInput from "../../components/formInput/FormInput";
import OtherAuthenticate from "../../layouts/plain/components/otherAuthenticate/OtherAuthenticate";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            agree: false
        };
    }

    componentDidMount() {
        if (this.props.isAuthorized) {
            this.props.history.replace('/todo');
        }
    }

    componentDidUpdate() {
        if (this.props.isAuthorized) {
            this.props.history.replace('todo');
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


    onUserAgreement = (event) => {
        this.setState({
                agree: event.target.checked
            }
        );
    };

    formFilled = () => {
        return this.state.username.length !== 0
            && this.state.password.length !== 0
            && this.state.agree;
    };

    onRegistrationSubmit = (event) => {
        event.preventDefault();

        const username = this.state.username;
        const password = this.state.password;
        this.setState({
            username: "",
            password: ""
        });

        this.props.register(username, password)
            .then(()=> {
                if(this.props.isRegistarated) {
                    this.props.signIn(username, password)
                }else{
                }
                }

            )
    };

    usernameStyleClass = () => {
        const error = this.props.error;
        const username = this.state.username;
        console.log( username.length > 0)
        console.log(username)
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

    render() {
        return (
            <form
                className={"sign-up-form"}
                onSubmit={this.onRegistrationSubmit}
            >
                <img
                    className={"sign-up-form__site-logo"}
                    src={siteLogo}
                    alt={"Eise Tasks"}
                />
                <FormInput
                    className={`sign-up-from__field ${this.usernameStyleClass()}`}
                    name={"Username"}
                    placeholder={"Username"}
                    type={"text"}
                    onChange={this.onUsernameChange}
                />
                <FormInput
                    className={`sign-up-from__field ${this.passwordStyleClass()}`}
                    name={"Password"}
                    placeholder={"Password"}
                    type={"password"}
                    onChange={this.onPasswordChange}
                />

                <section className={"sign-up-form__agreement agreement"}>

                    <label className={"agreement__title"}>
                        <input
                            className={"agreement__button"}
                            type={"checkbox"}
                            onChange={this.onUserAgreement}
                        />
                        I agree to processing of personal data
                    </label>
                </section>

                <Button
                    className={"sign-up-form__button button"}
                    value={"Sign up"}
                    type={"submit"}
                    disabled={!this.formFilled()}
                />

                <OtherAuthenticate
                    className={"sign-up-form"}
                    title={"Have an account?"}
                    buttonTitle={"Log in"}
                    url={'/signin'}
                />
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.userReducer.isAuthorized,
        isRegistarated: state.userReducer.isRegistarated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: bindActionCreators(register, dispatch),
        signIn: bindActionCreators(signIn, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);