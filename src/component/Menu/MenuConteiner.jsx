import React from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import * as axios from 'axios'
import { setDate } from '../../redux/reducer/different_reducer'

class MenuConteinerAPI extends React.Component {
    componentDidMount = () => {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true,
            })
            .then(respons => {
                this.props.setDate(respons.data)
            })
    }

    render = () => {
        return <Menu {...this.props} />
    }
}

let mapStateToProps = state => {
    return {
        log: state.differentPage.login,
    }
}

const MenuConteiner = connect(mapStateToProps, { setDate })(MenuConteinerAPI)

export default MenuConteiner
