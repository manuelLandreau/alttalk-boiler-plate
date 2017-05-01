const validate = values => {
    const errors = {};
    if (!values.new_talk) {
        errors.new_talk = 'Required'
    }
    return errors
};

export default validate