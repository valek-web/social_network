import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Messages from './component/Content/Messages/Messages'
import UsersConteiner from './component/Content/Users/UsersConteiner'
import Article from './component/Article/Article'
import Profile from './component/Content/Profile/Profile'
import MenuConteiner from './component/Menu/MenuConteiner'
import Login from './component/Login/Login'
import { connect } from 'react-redux'
import { thunkCreatorDifferent } from './redux/reducer/different_reducer'
import { withRouter } from 'react-router'
import Preloader from './component/different/preloader/preloader'
import loan from './img/load_book.gif'

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
                    <Route path='/profile/:id?' render={() => <Profile />} />
                    <Route
                        path='/messages:id?'
                        render={() => (
                            <Messages
                                stateMessages={this.props.state}
                                dispatch={this.props.dispatch}
                            />
                        )}
                    />
                    <Route path='/users' render={() => <UsersConteiner />} />
                    <Route path='/login' render={() => <Login />} />
                </div>
                <Article />
            </div>
        )
    }
}
let mapStateToProps = state => {
    return {
        inizialize: state.differentPage.inizialization,
    }
}

export default withRouter(
    connect(mapStateToProps, { ...thunkCreatorDifferent })(App)
)
