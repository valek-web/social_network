import React from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'

const MenuConteinerAPI = React.memo((props) => {
    return <Menu {...props} />
})

let mapStateToProps = (state) => {
    return {
        log: state.differentPage.login,
    }
}

const MenuConteiner = connect(mapStateToProps, {})(MenuConteinerAPI)

export default MenuConteiner
