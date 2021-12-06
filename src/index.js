import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/redux_store'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
