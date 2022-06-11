import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { thunkCreatorProfile } from './../../../redux/reducer/profile_reducer'
import { thunkCreatorDifferent } from './../../../redux/reducer/different_reducer'
import Preloader from './../../different/preloader/preloader'
import load from './../../../img/load_book.gif'
import { withRouter } from 'react-router-dom'
import { AuthRedirect } from './../../hoc/AuthRedirect'
import { compose } from 'redux'
import Profile from './Profile'

const ProfileContainer = React.memo((props) => {
    useEffect(() => {
        props.getProfileInfoTC(props.match.params.id, props.onMyID)
        props.getStatusTC(props.match.params.id, props.onMyID)
    }, [props, props.status, props.boolProfile])
    return !props.boolProfile || !props.status ? (
        <>{<Preloader loading={load} />}</>
    ) : (
        <Profile {...props} />
    )
})

let mapStateToProps = (state) => {
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
        ...thunkCreatorProfile,
        ...thunkCreatorDifferent,
    }),
    withRouter,
    AuthRedirect
)(ProfileContainer)
