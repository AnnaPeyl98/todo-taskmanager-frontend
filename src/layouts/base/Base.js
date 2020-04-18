import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import whoami from "../../actions/user/whoami";
import './style.css';

class Base extends React.Component {

    componentDidMount() {
        this.props.whoami();
    }

    render() {
        return (
            <React.Fragment>
                <Header user={this.props.username}/>
                <main className='main'>
                    <SideBar className='main__side-bar'/>
                    <section className='main__content'>
                        {this.props.children}
                    </section>
                </main>
            </React.Fragment>
        );
    }
    ;
}
;

Base.propTypes = {
    children: PropTypes.node.isRequired
};
const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        whoami: bindActionCreators(whoami, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Base);