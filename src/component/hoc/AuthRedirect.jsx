import React from 'react'
import { Redirect } from 'react-router'

export const AuthRedirect = Component => props => {
    return !props.auth ? <Redirect to='/login' /> : <Component {...props} />
}
