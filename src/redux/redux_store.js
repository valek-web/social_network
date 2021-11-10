import { applyMiddleware, combineReducers, createStore } from 'redux'
import { dialogs_reducer } from './reducer/dialogs_reducer'
import { profile_reducer } from './reducer/profile_reducer'
import { different_reducer } from './reducer/different_reducer'
import { users_reduser } from './reducer/users_reduser'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension'

let reducers = combineReducers({
    profilePage: profile_reducer,
    messagesPage: dialogs_reducer,
    differentPage: different_reducer,
    usersPage: users_reduser,
    form: formReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

window.str = store

export default store
