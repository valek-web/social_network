import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import MenuConteiner from './component/Menu/MenuConteiner'
import { connect } from 'react-redux'
import { thunkCreatorDifferent } from './redux/reducer/different_reducer'
import { withRouter } from 'react-router'
import Preloader from './component/different/preloader/preloader'
import loan from './img/load_book.gif'
import { ReactSuspense } from './component/hoc/Suspense'
import ProfileContainer from './component/Content/Profile/ProfileContainer'
const Login = React.lazy(() => import('./component/Login/Login'))
const UsersConteiner = React.lazy(() =>
    import('./component/Content/Users/UsersConteiner')
)

const App = React.memo((props) => {
    useEffect(() => {
        props.inizializationTC()
    }, [])
    return !props.inizialize ? (
        <Preloader loading={loan} />
    ) : (
        <div className='App'>
            <header className='header'></header>
            <main className='page'>
                <div className='page__menu'>
                    <MenuConteiner />
                </div>
                <div className='page__content'>
                    <Switch>
                        <Route
                            path='/profile/:id?'
                            render={() => <ProfileContainer />}
                        />
                        <Route
                            path='/users'
                            render={() => ReactSuspense(UsersConteiner)()}
                        />
                        <Route
                            path='/login'
                            render={() => ReactSuspense(Login)()}
                        />
                        <Redirect from='/' to='/profile' />
                    </Switch>
                </div>
            </main>
        </div>
    )
})

let mapStateToProps = (state) => {
    return {
        inizialize: state.differentPage.inizialization,
    }
}

export default withRouter(
    connect(mapStateToProps, { ...thunkCreatorDifferent })(App)
)
