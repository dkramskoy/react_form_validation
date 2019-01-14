import React from 'react';

const FormHeader = ({logo, titleText}) => (
    <div className="form__header">
        <img src={logo} alt="company-name" className="form__logo form__logo_out-of-flow"/>
        <h3 className="form__title">{titleText}</h3>
    </div>
);

export default FormHeader;