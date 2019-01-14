import React from 'react';

const FormGreeting = ({userName, userCity, logAgain}) => (
    <div className="form__greetings">
       <h3 className="form__title"> {`Спасибо за регистрацию ${userName} из города ${userCity}`}</h3>
       <button className="form__button form__button_close" onClick={logAgain}>Открыть форму регистрации</button>
    </div> 
)

export default FormGreeting;