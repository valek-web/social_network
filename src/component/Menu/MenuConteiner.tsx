import React from 'react'
import { connect } from 'react-redux'
import { stateType } from '../../redux/redux_store'
import Menu from './Menu'

type propsType = {
    log: boolean
}

const MenuConteinerAPI:React.FC<propsType> = React.memo((props) => {
    return <Menu {...props} />
})

let mapStateToProps = (state: stateType) => {
    return {
        log: state.differentPage.login,
    }
}

const MenuConteiner = connect(mapStateToProps, {})(MenuConteinerAPI)

export default MenuConteiner
