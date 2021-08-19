import axios from 'axios'
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
        const profileUser = userID => {
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/profile/${userID}`
                )
                .then(respocse => {
                    this.props.setProfileInfo(respocse.data)
                })
        }
        // const myProfile = () => {
        //     axio s
        //         .get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
        //             withCredentials: true,
        //         })
        //         .then(respocse => {
        //             this.props.setDate(respocse.data)
        //             profileUser(respocse.data.data.id)
        //         })
        // }
        // if (!this.props.match.params.id) {
        // myProfile()
        // } else {
        profileUser(2)
        // }
    }

    render = () => {
        return this.props.onProfile === null ? (
            <Preloader loading={load} />
        ) : (
            <ProfileBlock {...this.props} />
        )
    }
}

let mapStateToProps = state => {
    return {
        onProfile: state.profilePage.profile,
    }
}

const ProfileBlockConteiner = connect(mapStateToProps, {
    actionUpdate,
    actionAddPost,
    setProfileInfo,
    setDate,
})(withRouter(ProfileBlockConteinerAPI))

export default ProfileBlockConteiner
