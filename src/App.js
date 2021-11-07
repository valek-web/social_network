import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Messages from './component/Content/Messages/Messages'
import UsersConteiner from './component/Content/Users/UsersConteiner'
import Article from './component/Article/Article'
import Profile from './component/Content/Profile/Profile'
import MenuConteiner from './component/Menu/MenuConteiner'
import Login from './component/Login/Login'
const App = props => {
    return (
        <div className='App'>
            <MenuConteiner />
            <div className='cont'>
                <Route path='/profile/:id?' render={() => <Profile />} />
                <Route
                    path='/messages:id?'
                    render={() => (
                        <Messages
                            stateMessages={props.state}
                            dispatch={props.dispatch}
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

export default App
