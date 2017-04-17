import React from 'react'
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/loginValidation';
import renderField from '../common/renderField';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

    static shouldComponentUpdate(nextProps, nextState){
        return nextProps !== nextState;
    }

    render() {
        const { message, handleSubmit } = this.props;

        return (
            <form class="pam" onSubmit={handleSubmit}>
                <div class="mbs">
                    <Field name="username"
                           class="grid__cell"
                           component={renderField}
                           type="text"
                           placeholder="Username"
                           label="Username"
                    />
                    <Field name="password"
                           class="grid__cell"
                           component={renderField}
                           type="password"
                           placeholder="Password"
                           label="Password"
                    />
                </div>
                <div class="clearfix"></div>
                <div class="fr">
                    <button class="btn">Send</button>
                </div>
                <div class="pam txtcenter">{message}</div>
            </form>
        );
    }
}

// Decorate the form component
LoginForm = reduxForm({
    form: 'login', // a unique name for this form
    validate
})(LoginForm);

export default LoginForm;