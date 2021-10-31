import React from 'react'
import { connect } from 'react-redux'
import {
    actionAddPost,
    actionUpdate,
    setProfileInfo,
    getProfileInfo,
} from '../../../../redux/reducer/profile_reducer'
import ProfileBlock from './ProfileBlock'
import Preloader from '../../../different/preloader/preloader'
import load from './../../../../img/load_book.gif'
import { withRouter } from 'react-router-dom'
import { setDate } from '../../../../redux/reducer/different_reducer'

class ProfileBlockConteinerAPI extends React.Component {
    componentDidMount = () => {
        this.props.getProfileInfo(this.props.match.params.id, this.props.onMyID)
    }

    render = () => {
        return !this.props.boolProfile ? (
            <>{<Preloader loading={load} />}</>
        ) : (
            <ProfileBlock {...this.props} />
        )
    }
}

let mapStateToProps = state => {
    return {
        onProfile: state.profilePage.profile,
        boolProfile: state.profilePage.boolDate,
        onMyID: state.differentPage.myID,
        log: state.differentPage.login,
    }
}

const ProfileBlockConteiner = connect(mapStateToProps, {
    actionUpdate,
    actionAddPost,
    setProfileInfo,
    setDate,
    getProfileInfo,
})(withRouter(ProfileBlockConteinerAPI))

export default ProfileBlockConteiner
