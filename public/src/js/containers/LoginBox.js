import React from 'react'
import {connect} from 'react-redux'
import {login, register, clearErrors} from '../actions/authActions';
import {openModal, closeModal, switchToLogin, switchToRegister} from '../actions/uiActions';
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import UserIcon from '../icons/UserIcon';

@connect((store) => {
    return {
        isOpen: store.ui.isOpen,
        tabSwitch: store.ui.tabSwitch,
        error: store.auth.error.message
    };
})
export default class LoginBox extends React.Component {

    constructor(props) {
        super(props);
    }

    static componentWillUpdate(nextProps, nextState) {
        console.log(nextProps !== nextState);
        return nextProps !== nextState;
    }

    handleLogin = (values) => {
        this.props.dispatch(login(values.username, values.password));
    };

    handleRegister = (values) => {
        this.props.dispatch(register(values.email, values.username, values.password));
    };

    handleOpenModal() {
        this.props.dispatch(openModal());
    }

    handleCloseModal() {
        this.props.dispatch(closeModal());
    }

    switchTabLogin() {
        this.props.dispatch(clearErrors());
        this.props.dispatch(switchToLogin());
    }

    switchTabRegister() {
        this.props.dispatch(clearErrors());
        this.props.dispatch(switchToRegister());
    }

    render() {

        const {isOpen, tabSwitch, error} = this.props;

        return (
            <div>
                <button class="btn" onClick={this.handleOpenModal.bind(this)}>
                    <UserIcon width="16" height="16"/>
                    <span class="tiny-hidden"> Sign in / Sign up</span>
                </button>
                <div>
                    <Modal
                        isModalOpen={isOpen}
                        closeModal={this.handleCloseModal.bind(this)}
                        style={{}}
                    >
                        <div>
                            <button class="fr btn" onClick={this.handleCloseModal.bind(this)}>&times;</button>
                        </div>
                        <div class="pam">
                            <button class="btn" onClick={this.switchTabLogin.bind(this)}>Login</button>
                            <button class="btn" onClick={this.switchTabRegister.bind(this)}>Register</button>
                        </div>
                        <div style={{display: tabSwitch ? 'inherit' : 'none'}}>
                            <LoginForm onSubmit={this.handleLogin.bind(this)} message={error}/>
                        </div>
                        <div style={{display: tabSwitch ? 'none' : 'inherit'}}>
                            <RegisterForm onSubmit={this.handleRegister.bind(this)} message={error}/>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}
