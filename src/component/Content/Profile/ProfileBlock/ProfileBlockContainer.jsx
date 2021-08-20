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
        !this.props.log
            ? console.log('nol date')
            : axios
                  .get(
                      `https://social-network.samuraijs.com/api/1.0/profile/${
                          !this.props.match.params.id
                              ? this.props.onMyID.id
                              : this.props.match.params.id
                      }`
                  )
                  .then(respons => {
                      debugger
                      this.props.setProfileInfo(respons.data)
                  })
    }

    render = () => {
        debugger
        return this.props.boolProfile === false ? (
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
        onMyID: state.differentPage.myDate,
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
