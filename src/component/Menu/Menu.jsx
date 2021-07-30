import React from 'react';
import { NavLink } from 'react-router-dom';
import q from './Menu.module.css';
import Books from '../Content/books/books';

const Menu = () => {
  return (
    <nav className={q.nav}>
      <div>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/messages'>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/books'>Books</NavLink>
      </div>
      <div>
        <NavLink to='/users'>Users</NavLink>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <span>Settings</span>
      </div>
    </nav>
  )
}

export default Menu;