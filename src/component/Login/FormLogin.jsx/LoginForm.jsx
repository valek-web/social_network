import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './LoginForm.module.css'

const LoginForm = props => {
    return (
        <form className={style.boxForm} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name='email'
                    type='email'
                    component='input'
                    placeholder='Login'
                />
            </div>
            <div>
                <Field
                    name='password'
                    type='password'
                    component='input'
                    placeholder='Password'
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
