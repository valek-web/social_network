import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Messages from './component/Content/Messages/Messages'
import BooksConteiner from './component/Content/books/booksConteiner'
import UsersConteiner from './component/Content/Users/UsersConteiner'
import ArticleComponent from './component/Article/ArticleComponent'
import Profile from './component/Content/Profile/Profile'
import MenuConteiner from './component/Menu/MenuConteiner'

const App = props => {
    return (
        <div className="App">
            <MenuConteiner />
            <div className="cont">
                <Route path="/profile" render={() => <Profile />} />
                <Route
                    path="/messages"
                    render={() => (
                        <Messages
                            stateMessages={props.state}
                            dispatch={props.dispatch}
                        />
                    )}
                />
                <Route
                    path="/books"
                    render={() => (
                        <BooksConteiner
                            stateBooks={props.state}
                            dispatch={props.dispatch}
                        />
                    )}
                />
                <Route path="/users" render={() => <UsersConteiner />} />
            </div>
            <ArticleComponent />
        </div>
    )
}

export default App
