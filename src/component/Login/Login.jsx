import React from 'react'
import { setLogin } from '../../redux/reducer/different_reducer'
import LoginForm from './FormLogin.jsx/LoginForm'
import style from './Login.module.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class Login extends React.Component {
    submitForm = formDate => {
        this.props.setLogin(
            formDate.email,
            formDate.password,
            formDate.rememberMe,
            true
        )
    }

    render = () => {
        return this.props.login ? (
            <Redirect to='/profile' />
        ) : (
            <div className={style.boxForm}>
                <h1>LOGIN</h1>
                <LoginForm onSubmit={this.submitForm} />
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        login: state.differentPage.login,
    }
}

export default connect(mapStateToProps, { setLogin })(Login)
