import React from 'react'
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/registerValidation';
import renderField from '../common/renderField';

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { message, handleSubmit } = this.props;

        return (
            <form class="pam" onSubmit={handleSubmit}>
                <div class="mbs">
                    <Field name="email"
                           component={renderField}
                           type="text"
                           placeholder="Email"
                           label="Email"
                    />
                    <Field name="username"
                           component={renderField}
                           type="text"
                           placeholder="Username"
                           label="Username"
                    />
                    <Field name="password"
                           component={renderField}
                           type="password"
                           placeholder="Password"
                           label="Password"
                    />
                </div>
                <div class="clearfix"></div>
                <div class="pam fr">
                    <button class="btn">Send</button>
                </div>
                <div class="pam txtcenter">{message}</div>
            </form>
        );
    }
}

// Decorate the form component
RegisterForm = reduxForm({
    form: 'register', // a unique name for this form
    validate
})(RegisterForm);

export default RegisterForm;