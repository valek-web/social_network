import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import BokRight from './component/Article/Article';
import Messages from './component/Content/Messages/Messages';
import Profile from './component/Content/Profile/Profile';
import Menu from './component/Menu/Menu';

function App(props) {
  debugger
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <div className="cont">
          <Route path='/profile' render={() => <Profile postsMap={props.state} dispatch={props.dispatch} />} />
          <Route path='/messages' render={() => <Messages nameMessage={props.state} dispatch={props.dispatch}/>} />
        </div>
        <BokRight />
      </div>
    </BrowserRouter>
  );
}

export default App;
