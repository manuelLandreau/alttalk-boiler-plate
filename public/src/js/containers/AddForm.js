import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {addTalk} from '../actions/talksActions';
import {connect} from 'react-redux';
import validate from '../validation/talkValidation';
import renderFieldTextarea from '../common/renderFieldTextarea';

@connect(store => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched
    }
})
class AddForm extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = (form) => {
        form.preventDefault();
        if (this.props.userFetched) {
            this.props.dispatch(addTalk(this.props.user._id, form.target.new_talk.value));
        } else {
            this.props.dispatch({type: 'OPEN_MODAL'});
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div class="mbs">
                    <Field name="new_talk"
                           component={renderFieldTextarea}
                           type="textarea"
                           parentClass="w100"
                           elemClass="w100"
                           placeholder="Write something&hellip;"
                           label=""
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
    form: 'newtalk', // a unique name for this form
    validate
})(AddForm);

export default AddForm;