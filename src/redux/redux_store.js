import { combineReducers, createStore } from "redux";
import { dialogs_reducer } from "./dialogs_reducer";
import { profile_reducer } from "./profile_reducer";


let reducers = combineReducers({
    profilePage: profile_reducer,
    messagesPage: dialogs_reducer
})

let store = createStore(reducers);

export default store;