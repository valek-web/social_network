import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { requiered } from '../../../validate/validateForms'
import Texterea from '../../different/Texterea/Texterea'
import style from './LoginForm.module.css'

const LoginForm = props => {
    return (
        <form className={style.boxForm} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name='email'
                    type='email'
                    component={Texterea}
                    placeholder='Login'
                    validate={requiered}
                />
            </div>
            <div>
                <Field
                    name='password'
                    type='password'
                    component={Texterea}
                    placeholder='Password'
                    validate={requiered}
                />
            </div>
            <div>
                <Field name='checkbox' type='checkbox' component='input' />
                <span>remember me</span>
            </div>
            <div className={style.btn_box}>
                <button>Log in</button>
                <button>Sign in</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'login',
})(LoginForm)
