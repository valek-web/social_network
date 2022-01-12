import React from 'react'
import { connect } from 'react-redux'
import { thunkCreatorProfile } from '../../../../redux/reducer/profile_reducer'
import { thunkCreatorDifferent } from '../../../../redux/reducer/different_reducer'
import ProfileBlock from './ProfileBlock'
import Preloader from '../../../different/preloader/preloader'
import load from './../../../../img/load_book.gif'
import { withRouter } from 'react-router-dom'
import { AuthRedirect } from '../../../hoc/AuthRedirect'
import { compose } from 'redux'

class ProfileBlockConteinerAPI extends React.PureComponent {
    componentDidUpdate = () => {
        this.props.getProfileInfoTC(
            this.props.match.params.id,
            this.props.onMyID
        )
        this.props.getStatusTC(this.props.match.params.id, this.props.onMyID)
    }

    render = () => {
        return !this.props.boolProfile  || !this.props.status ? (
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
        ...thunkCreatorProfile,
        ...thunkCreatorDifferent,
    }),
    withRouter,
    AuthRedirect
)(ProfileBlockConteinerAPI)
