import React from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import * as axios from 'axios'

class MenuConteinerAPI extends React.Component {
    componentDidMount = () => {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true,
            })
            .then(respons => {
                debugger
            })
    }

    render = () => {
        return <Menu />
    }
}

const MenuConteiner = connect()(MenuConteinerAPI)

export default MenuConteiner
