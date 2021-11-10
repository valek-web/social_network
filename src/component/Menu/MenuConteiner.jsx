import React from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'

class MenuConteinerAPI extends React.Component {
    render = () => {
        return <Menu {...this.props} />
    }
}

let mapStateToProps = state => {
    return {
        log: state.differentPage.login,
    }
}

const MenuConteiner = connect(mapStateToProps, {})(MenuConteinerAPI)

export default MenuConteiner
