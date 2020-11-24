import React from 'react';
import { NavLink } from 'react-router-dom';
import q from './NameMessage.module.css'

const NameMessage = (props) => {
  let path = `/messages/${props.id}`;
  return (
    <li><NavLink to={path}  className={q.li} active={q.active}>{props.name}</NavLink></li>
  )
}

export default NameMessage; 