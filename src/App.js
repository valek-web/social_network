import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Messages from "./component/Content/Messages/Messages";
import Menu from "./component/Menu/Menu";
import BooksConteiner from "./component/Content/books/booksConteiner";
import Profile from "./component/Content/Profile/Profile";
import UsersConteiner from './component/Content/Users/UsersConteiner';
import ArticleComponent from "./component/Article/ArticleComponent";

const App = (props) => {
  return (
    <div className="App">
      <Menu />
      <div className="cont">
        <Route
          path="/profile"
          render={() => (
            <Profile stateProfile={props.state} dispatch={props.dispatch} />
          )}
        />
        <Route
          path="/messages"
          render={() => (
            <Messages stateMessages={props.state} dispatch={props.dispatch} />
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
        <Route
          path="/users"
          render={() => (
            <UsersConteiner />)
          } />
      </div>
      <ArticleComponent />
    </div>
  );
};

export default App;
