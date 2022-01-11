import React from 'react'
import { thunkCreatorDifferent } from '../../redux/reducer/different_reducer'
import LoginForm from './FormLogin.jsx/LoginForm'
import style from './Login.module.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class Login extends React.PureComponent {
    submitForm = formDate => {
        this.props.setLoginTC(
            formDate.email,
            formDate.password,
            formDate.rememberMe,
            formDate.captcha,
            true
        )
    }

    render = () => {
        return this.props.login ? (
            <Redirect to='/profile' />
        ) : (
            <div className={style.boxForm}>
                <h1>LOGIN</h1>
                <LoginForm onSubmit={this.submitForm} captcha={this.props.captcha}/>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        login: state.differentPage.login,
        captcha: state.differentPage.getCaptchaUrl
    }
}

export default connect(mapStateToProps, { ...thunkCreatorDifferent })(Login)
