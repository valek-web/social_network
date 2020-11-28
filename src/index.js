import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import stone from './redux/state';

export let renderAll = (states) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={states}  newPostClick={stone.newPostClick.bind(stone)} updatePostText={stone.updatePostText.bind(stone)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderAll(stone.getState())
stone.renderNew(renderAll)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
