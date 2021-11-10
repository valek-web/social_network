import React from 'react'
import { connect } from 'react-redux'
import {
    getProfileInfoTC,
    getStatusTC,
    setStatusTC,
} from '../../../../redux/reducer/profile_reducer'
import { logOutTC } from '../../../../redux/reducer/different_reducer'
import ProfileBlock from './ProfileBlock'
import Preloader from '../../../different/preloader/preloader'
import load from './../../../../img/load_book.gif'
import { withRouter } from 'react-router-dom'
import { AuthRedirect } from '../../../hoc/AuthRedirect'
import { compose } from 'redux'

class ProfileBlockConteinerAPI extends React.PureComponent {
    componentDidMount = () => {
        this.props.getProfileInfoTC(
            this.props.match.params.id,
            this.props.onMyID
        )
        this.props.getStatusTC(this.props.match.params.id, this.props.onMyID)
    }

    render = () => {
        return !this.props.boolProfile /* || !this.props.status*/ ? (
            <>{<Preloader loading={load} />}</>
        ) : (
            <ProfileBlock {...this.props} />
        )
    }
}

let mapStateToProps = state => {
    return {
        status: state.profilePage.status,
        onProfile: state.profilePage.profile,
        boolProfile: state.profilePage.boolDate,
        onMyID: state.differentPage.myID,
        log: state.differentPage.login,
        auth: state.differentPage.login,
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfileInfoTC,
        getStatusTC,
        setStatusTC,
        logOutTC,
    }),
    withRouter,
    AuthRedirect
)(ProfileBlockConteinerAPI)
