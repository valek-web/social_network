import { combineReducers, createStore } from "redux";
import { dialogs_reducer } from "./reducer/dialogs_reducer";
import { profile_reducer } from "./reducer/profile_reducer";
import { different_reducer } from "./reducer/different_reducer";
import { books_reducer } from "./reducer/books_reducer";
import { users_reduser } from './reducer/users_reduser';

let reducers = combineReducers({
  profilePage: profile_reducer,
  messagesPage: dialogs_reducer,
  differentPage: different_reducer,
  booksPage: books_reducer,
  usersPage: users_reduser,
});

let store = createStore(reducers);

window.str = reducers;

export default store;
