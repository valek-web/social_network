import React from 'react'
import { connect } from 'react-redux'
import {
    actionAddPost,
    actionUpdate,
    setProfileInfo,
} from '../../../../redux/reducer/profile_reducer'
import ProfileBlock from './ProfileBlock'
import Preloader from '../../../different/preloader/preloader'
import load from './../../../../img/load_book.gif'
import { withRouter } from 'react-router-dom'
import { setDate } from '../../../../redux/reducer/different_reducer'
import { globalAPI } from '../../../../api/api'

class ProfileBlockConteinerAPI extends React.Component {
    componentDidMount = () => {
        globalAPI
            .profileInfo(
                !this.props.match.params.id
                    ? this.props.onMyID
                    : this.props.match.params.id
            )
            .then(data => {
                this.props.setProfileInfo(data)
            })
    }
    render = () => {
        return !this.props.boolProfile ? (
            <>
                {this.componentDidMount()}
                <Preloader loading={load} />
            </>
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
})(withRouter(ProfileBlockConteinerAPI))

export default ProfileBlockConteiner
