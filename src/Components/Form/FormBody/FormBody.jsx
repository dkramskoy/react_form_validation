import React from 'react';
import FormError from '../FormError/FormError';

const FormBody = ({ changeInfo, submitData,
                    userName, userEmail, userPassword, userPasswordConfirm,
                    userNameInvalid, userEmailInvalid, userPasswordInvalid }) => (

    <div className="form__body">

        <label className="form__item form__body_up-10 form__item_relative">Имя
            <input 
                type="text"
                className={`form__item form__item-input ${userNameInvalid.length > 0 && 'form__item-input_error'}`}
                id="userName"
                value={userName}
                onChange={(e) => changeInfo(e)}
            />
            {userNameInvalid.length > 0 && <FormError errors={userNameInvalid} /> }
        </label>

        <label className="form__item form__body_up-10 form__item_relative">Email
            <input 
                type="text"
                className={`form__item form__item-input ${userEmailInvalid.length > 0 && 'form__item-input_error'}`}
                id="userEmail"
                value={userEmail}
                onChange={(e) => changeInfo(e)}
            />
            {userEmailInvalid.length > 0 && <FormError errors={userEmailInvalid} /> }
        </label>
        
        <label className="form__item form__body_up-10">Город
            <select 
                id="userCity"
                className="form__item form__item-select"
                onChange={(e) => changeInfo(e)}
            >
                <option value="Киев">Киев</option>
                <option value="Львов">Львов</option>
                <option value="Харьков">Харьков</option>
                <option value="Одесса">Одесса</option>
                <option value="Мариуполь">Мариуполь</option>
            </select>
        </label>

        <label className="form__item form__body_up-10 form__item_relative">Пароль
            <input 
                type="password"
                className={`form__item form__item-input ${userPasswordInvalid.length > 0 && 'form__item-input_error'}`}
                id="userPassword"
                value={userPassword}
                onChange={(e) => changeInfo(e)}
            />
            {userPasswordInvalid.length > 0 && <FormError errors={userPasswordInvalid} /> }
        </label>

        <label className="form__item form__body_up-10">Подтверждение пароля
            <input 
                type="password"
                className="form__item form__item-input"
                id="userPasswordConfirm"
                value={userPasswordConfirm}
                onChange={(e) => changeInfo(e)}
            />
        </label>
        
        <button 
            type="submit"
            className="form__submit form__body_up-40"
            onClick={submitData}>Войти</button>
    </div>
);

export default FormBody;