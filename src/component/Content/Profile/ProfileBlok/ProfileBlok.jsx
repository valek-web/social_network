import React from 'react';
import q from './ProfileBlok.module.css';

const ProfileBlok = (props) => {
  return (
    <content className={q.con}>
      <div className={q.tec}>
        <img src='https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg' alt='#' className={q.ava} />
        <div>
          <ul>
            <li><h3>Jon Ten</h3></li>
            <li>Age: 33</li>
            <li>Working: companion Google</li>
            <li>Text: Learn programming for js!</li>
          </ul>
        </div>
      </div>
    </content>
  )
}

export default ProfileBlok; 