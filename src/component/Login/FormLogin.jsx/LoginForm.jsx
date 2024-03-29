import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { requiered } from '../../../validate/validateForms'
import Texterea from '../../different/Texterea/Texterea'
import style from './LoginForm.module.css'

const LoginForm = ({ handleSubmit, error, captcha }) => {
    return (
        <>
            Тестовые Email и Password:
            <div>Email: free@samuraijs.com </div>
            <div>Password: free</div>
            <form className={style.boxForm} onSubmit={handleSubmit}>
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
                {!error ? '' : <div className={style.errorBox}>{error}</div>}
                {!!captcha ? (
                    <div>
                        <div>
                            <img src={captcha} alt='#' />
                        </div>
                        <Field name='captcha' type='text' component='input' />
                    </div>
                ) : (
                    ''
                )}
                <div className={style.btn_box}>
                    <button className='button'>Log in</button>
                    <a href='https://social-network.samuraijs.com/signUp'>
                        sign up
                    </a>
                </div>
            </form>
        </>
    )
}

export default reduxForm({
    form: 'login',
})(LoginForm)
