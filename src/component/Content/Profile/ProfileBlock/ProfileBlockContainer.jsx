/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { connect } from 'react-redux'
import { thunkCreatorProfile } from '../../../../redux/reducer/profile_reducer'
import { thunkCreatorDifferent } from '../../../../redux/reducer/different_reducer'
import ProfileBlock from './ProfileBlock'
import { withRouter } from 'react-router-dom'
import { AuthRedirect } from '../../../hoc/AuthRedirect'
import { compose } from 'redux'

const ProfileBlockConteiner = React.memo((props) => {
    return (
        <ProfileBlock
            status={props.status}
            logOutTC={props.logOutTC}
            onProfile={props.onProfile}
            setStatusTC={props.getStatusTC}
        />
    )
})

let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
        onProfile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, {
        ...thunkCreatorProfile,
        ...thunkCreatorDifferent,
    }),
    withRouter,
    AuthRedirect
)(ProfileBlockConteiner)
