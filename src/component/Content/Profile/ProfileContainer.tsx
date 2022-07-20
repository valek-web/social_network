/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { thunkCreatorProfile } from '../../../redux/reducer/profile_reducer'
import Preloader from '../../different/preloader/preloader'
import load from './../../../img/load_book.gif'
import { withRouter } from 'react-router-dom'
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'
import Profile from './Profile'
import { stateType } from '../../../redux/redux_store'

type mapStateToPropsType = {
    status: string,
    boolProfile: boolean,
    onMyID: any,
}

type mapDispatchToPropsType = {
    getProfileInfoTC: (id: number, myID: number) => void,
    getStatusTC: (id: number, myID: number) => void,
}

type ownPropsType = {
    match: any
}

type propsType = mapStateToPropsType & mapDispatchToPropsType & ownPropsType

const ProfileContainer: React.FC<propsType> = React.memo((props) => {
    debugger
    useEffect(() => {
        props.getProfileInfoTC(props.match.params.id, props.onMyID)
        props.getStatusTC(props.match.params.id, props.onMyID)
    }, [props.status, props.boolProfile])
    return !props.boolProfile || !props.status ? (
        <>{<Preloader loading={load} />}</>
    ) : (
        <Profile boolProfile={props.boolProfile} status={props.status} />
    )
})

let mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        status: state.profilePage.status,
        boolProfile: state.profilePage.boolDate,
        onMyID: state.differentPage.myID,
    }
}

export default compose(
    connect<mapStateToPropsType,
        mapDispatchToPropsType,
        ownPropsType,
        stateType>(mapStateToProps,
            {
                getProfileInfoTC: thunkCreatorProfile.getProfileInfoTC,
                getStatusTC: thunkCreatorProfile.getStatusTC
            }),
    withRouter,
    AuthRedirect
)(ProfileContainer)
