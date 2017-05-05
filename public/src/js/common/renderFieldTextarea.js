import React from 'react';

const renderFieldTextarea = ({ input, label, parentClass, elemClass, type, meta: { touched, error } }) => (
    <div class={parentClass}>
        <label for={name}>{label}</label>
        <textarea {...input} class={elemClass} placeholder={label} type={type}/>
        <div>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

export default renderFieldTextarea;