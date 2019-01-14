import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import FormHeader from './FormHeader/FormHeader';
import FormBody from './FormBody/FormBody';
import FormGreeting from './FormGreeting/FormGreeting';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            userName: '',
            userEmail: '',
            userCity: 'Киев',
            userPassword: '',
            userPasswordConfirm: '',
            userNameInvalid: [],
            userEmailInvalid: [],
            userPasswordInvalid: [],
            overallDataInvalid: ['userNameInvalid', 'userEmailInvalid', 'userPasswordInvalid'],
            fieldsToBeChecked: ['userName', 'userEmail', 'userPassword'],
            userLoggedIn: false
        }
        this.handleInput          = this.handleInput.bind(this);
        this.handleSubmit         = this.handleSubmit.bind(this);
        this.validateFields       = this.validateFields.bind(this);
        this.addErrorIntoState    = this.addErrorIntoState.bind(this);
        this.deleteErrorFromState = this.deleteErrorFromState.bind(this);
        this.logAgain             = this.logAgain.bind(this);
    }

    handleInput(e) {
        let field = e.target.id
        let value = e.target.value
        this.setState({
            [field]: value,
        }, () => this.validateFields(field) )
    }

    handleSubmit(e) {
        e.preventDefault()
        
        this.state.fieldsToBeChecked.forEach( field => this.validateFields(field) )

        if( this.state.overallDataInvalid.length === 0 ) {
            this.setState({ userLoggedIn: true })
        }

    }

    validateFields(field) {
        
        switch (field) {

            case 'userName': {

                let nameErrors     = [];
                let numberRegExp   = /\d/;
                let symbolRegExp   = /[!|@|#|$|%|^|&|*|(|)|?]/;

                if( this.state[field].trim().length < 3 )  { nameErrors.push('Имя должно содержать не меньше 3 букв.') };
                if( numberRegExp.test(this.state[field]) ) { nameErrors.push('Имя не должно содержать цифр.') };
                if( symbolRegExp.test(this.state[field]) ) { nameErrors.push('Имя не должно содержать специальных символов.') };

                nameErrors.length > 0 ? this.addErrorIntoState('userNameInvalid', nameErrors) : this.deleteErrorFromState('userNameInvalid')

                break
            }

            case 'userEmail': {
                
                let emailErrors = [];
                let emailRegExp = /^\w[\w|\d]{1,}@\w{1,}\.com|ua|ru$/;

                if( !emailRegExp.test(this.state[field]) ) { emailErrors.push('Введите корректный адрес почты.') };
        
                emailErrors.length > 0 ? this.addErrorIntoState('userEmailInvalid', emailErrors) : this.deleteErrorFromState('userEmailInvalid')

                break
            }

            case 'userPassword': {
                
                let passwordErrors  = [];
                let upperCaseRegExp = /[A-ZА-Я]/;
                let numberRegExp    = /\d/;

                if( this.state[field].trim().length < 6 )                 { passwordErrors.push('Пароль должен содержать не менее 6 символов.') };
                if( !upperCaseRegExp.test(this.state[field]) )            { passwordErrors.push('Пароль должен содержать не менее 1 буквы в верхнем регистре.') };  
                if( !numberRegExp.test(this.state[field]) )               { passwordErrors.push('Пароль должен содержать не менее 1 цифры.') };
                if( this.state[field] !== this.state.userPasswordConfirm) { passwordErrors.push('Пароли в соответствующих полях должны совпадать.') };
                
                passwordErrors.length > 0 ? this.addErrorIntoState('userPasswordInvalid', passwordErrors) : this.deleteErrorFromState('userPasswordInvalid')

                break
            }
            
            case 'userPasswordConfirm': {

                let passwordErrors  = [];

                if( this.state[field] !== this.state.userPassword) { passwordErrors.push('Пароли в соответствующих полях должны совпадать.') };

                passwordErrors.length > 0 ? this.addErrorIntoState('userPasswordInvalid', passwordErrors) : this.deleteErrorFromState('userPasswordInvalid')

                break
            }

            default: return
        }
    }

    addErrorIntoState(field, errors) {
        this.setState({
            [field]: errors,
            overallDataInvalid: this.state.overallDataInvalid.indexOf(field) !== -1
            ? this.state.overallDataInvalid
            : [...this.state.overallDataInvalid, field]
        })
    }

    deleteErrorFromState(field) {
        this.setState({
            [field]: [],
            overallDataInvalid: this.state.overallDataInvalid.filter( error => error !== field )
        })
    }

    logAgain() {
        this.setState({
            userName: '',
            userEmail: '',
            userCity: 'Kiev',
            userPassword: '',
            userPasswordConfirm: '',
            overallDataInvalid: ['userNameInvalid', 'userEmailInvalid', 'userPasswordInvalid'],
            userLoggedIn: false
        })
    }

    render() {
        const {userName, userEmail, userPassword, userCity, userPasswordConfirm,
               userNameInvalid, userEmailInvalid, userPasswordInvalid,
               userLoggedIn} = this.state;
        return (
            <div className="form">
                <FormHeader 
                    logo={logo} 
                    titleText={'Зарегистрироваться'}
                />
                {userLoggedIn
                    ? <FormGreeting 
                            userName={userName} 
                            userCity={userCity} 
                            logAgain={this.logAgain}
                        />
                    : <FormBody 
                            changeInfo={this.handleInput}
                            submitData={this.handleSubmit}
                            userName={userName}
                            userEmail={userEmail}
                            userPassword={userPassword}
                            userPasswordConfirm={userPasswordConfirm}
                            userNameInvalid={userNameInvalid}
                            userEmailInvalid={userEmailInvalid}
                            userPasswordInvalid={userPasswordInvalid}
                        />
                    }
            </div>
        )
    }
}

export default Form;