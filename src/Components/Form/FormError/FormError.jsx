import React from 'react';

const FormError = ({errors}) => (
    <div className="form__error">
        {errors.map((error, index) => {
            return <span className="form__error-message" key={index}>{error}</span>
        })}
    </div>
    
)

export default FormError;