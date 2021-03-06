import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <div class="inbl w50">
            <label for={name}>{label}</label>
        </div>
        <div class="inbl w50">
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

export default renderField;