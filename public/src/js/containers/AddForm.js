import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {addTalk} from '../actions/talksActions';
import {connect} from 'react-redux';

@connect(store => {
    return {
        user: store.user.user
    }
})
class AddForm extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = (form) => {
        form.preventDefault();
        this.props.dispatch(addTalk(this.props.user._id, form.target.new_talk.value));
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div class="mbs">
                    <Field name="new_talk"
                           component="textarea"
                           type="textarea"
                           class="w100"
                           placeholder="Write something&hellip;"
                    />
                </div>
                <button class="fr btn_green">Send</button>
                <div class="clearfix"></div>
            </form>
        );
    }
}

// Decorate the form component
AddForm = reduxForm({
    form: 'newtalk' // a unique name for this form
    //validate
})(AddForm);

export default AddForm;