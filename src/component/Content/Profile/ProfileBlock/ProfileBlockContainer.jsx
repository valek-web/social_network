import React from 'react'
import { connect } from 'react-redux'
import {
    getProfileInfo,
    getStatus,
    setStatus,
} from '../../../../redux/reducer/profile_reducer'
import { logOutTC } from '../../../../redux/reducer/different_reducer'
import ProfileBlock from './ProfileBlock'
import Preloader from '../../../different/preloader/preloader'
import load from './../../../../img/load_book.gif'
import { withRouter } from 'react-router-dom'
import { AuthRedirect } from '../../../hoc/AuthRedirect'
import { compose } from 'redux'

class ProfileBlockConteinerAPI extends React.Component {
    componentDidMount = () => {
        this.props.getProfileInfo(this.props.match.params.id, this.props.onMyID)
        this.props.getStatus(this.props.match.params.id, this.props.onMyID)
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
        getProfileInfo,
        getStatus,
        setStatus,
        logOutTC,
    }),
    withRouter,
    AuthRedirect
)(ProfileBlockConteinerAPI)
