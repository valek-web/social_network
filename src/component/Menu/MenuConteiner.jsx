import React from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import { setProfileInfoMe } from '../../redux/reducer/different_reducer'

class MenuConteinerAPI extends React.Component {
    componentDidMount = () => {
        this.props.setProfileInfoMe()
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

const MenuConteiner = connect(mapStateToProps, { setProfileInfoMe })(
    MenuConteinerAPI
)

export default MenuConteiner
