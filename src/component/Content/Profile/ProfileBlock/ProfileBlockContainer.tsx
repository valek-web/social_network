/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { connect } from 'react-redux'
import { thunkCreatorProfile } from '../../../../redux/reducer/profile_reducer'
import { thunkCreatorDifferent } from '../../../../redux/reducer/different_reducer'
import ProfileBlock from './ProfileBlock'
import { withRouter } from 'react-router-dom'
import { AuthRedirect } from '../../../hoc/AuthRedirect'
import { compose } from 'redux'
import { stateType } from '../../../../redux/redux_store'

type propsType = {
    status: string,
    onProfile: any,

    getStatusTC: () => void,
    logOutTC: () => void
}

const ProfileBlockConteiner: React.FC<propsType> = React.memo((props) => {
    return <ProfileBlock status={props.status}
        logOutTC={props.logOutTC}
        onProfile={props.onProfile}
        setStatusTC={props.getStatusTC} />
})

let mapStateToProps = (state: stateType) => {
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
