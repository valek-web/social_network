import * as axios from 'axios'
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

class ProfileBlockConteinerAPI extends React.Component {
    componentDidMount = () => {
        debugger
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${
                    !this.props.match.params.id
                        ? this.props.onMyID
                        : this.props.match.params.id
                }`,
                {
                    withCredentials: true,
                }
            )
            .then(respons => {
                this.props.setProfileInfo(respons.data)
            })
    }
    render = () => {
        return !this.props.boolProfile ? (
            <>
                {this.componentDidMount()}
                <Preloader loading={load} />
            </>
        ) : !this.props.match.params.id ? (
            <>
                {this.componentDidMount()}
                <ProfileBlock {...this.props} />
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
