import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Messages from './component/Content/Messages/Messages'
import Article from './component/Article/Article'
import Profile from './component/Content/Profile/Profile'
import MenuConteiner from './component/Menu/MenuConteiner'
import { connect } from 'react-redux'
import { thunkCreatorDifferent } from './redux/reducer/different_reducer'
import { withRouter } from 'react-router'
import Preloader from './component/different/preloader/preloader'
import loan from './img/load_book.gif'
import { ReactSuspense } from './component/hoc/Suspense'
const Login = React.lazy(() => import('./component/Login/Login'))
const UsersConteiner = React.lazy(() =>
    import('./component/Content/Users/UsersConteiner')
)

class App extends React.Component {
    componentDidMount = () => {
        this.props.inizializationTC()
    }
    render = () => {
        return !this.props.inizialize ? (
            <Preloader loading={loan} />
        ) : (
            <div className='App'>
                <MenuConteiner />
                <div className='cont'>
                    <Switch>
                        <Route
                            path='/profile/:id?'
                            render={() => <Profile />}
                        />
                        <Route
                            path='/messages:id?'
                            render={() => (
                                <Messages
                                    stateMessages={this.props.state}
                                    dispatch={this.props.dispatch}
                                />
                            )}
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
                <Article />
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        inizialize: state.differentPage.inizialization,
    }
}

export default withRouter(
    connect(mapStateToProps, { ...thunkCreatorDifferent })(App)
)
