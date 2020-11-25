import * as serviceWorker from './serviceWorker';
import state, { newPostClick, updatePostText, renderNew } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let renderAll = (states) => {
  debugger
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}  newPostClick={newPostClick} updatePostText={updatePostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderAll(state)
debugger
renderNew(renderAll)
debugger

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
