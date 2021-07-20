import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BokRight from './component/Article/Article';
import Messages from './component/Content/Messages/Messages';
import Menu from './component/Menu/Menu';
import BooksConteiner from './component/Content/books/booksConteiner';
import Profile from './component/Content/Profile/Profile';

const App = (props) => {
  return (
      <div className="App">
        <Menu />
        <div className="cont">
          <Route path='/profile' render={() => <Profile stateProfile={props.state} dispatch={props.dispatch} />} />
          <Route path='/messages' render={() => <Messages stateMessages={props.state} dispatch={props.dispatch} />} />
          <Route path='/books' render={() => <BooksConteiner stateBooks={props.state} dispatch={props.dispatch} />} />
        </div>
        <BokRight />
      </div>
     
  );
}

export default App;
