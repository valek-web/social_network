import React from 'react';
import q from './Post.module.css';

const Posts = (props) => {
  return (
    <div className={q.ava}>
      <div>
        <img src="https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" />
      </div>
      <div>
      <p>
        {props.message}
      </p>
      <span className={q.like}>{props.like}</span>
      </div>
    </div>
  )
}

export default Posts; 