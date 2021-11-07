import React from 'react'
import { NavLink } from 'react-router-dom'
import q from './Menu.module.css'

const Menu = props => {
    return (
        <nav className={q.nav}>
            <div>
                <NavLink to='/profile'>
                    {props.log ? 'Profile' : 'Sign IN'}
                </NavLink>
            </div>
            <div>
                <NavLink to='/messages'>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/users'>Users</NavLink>
                <p></p>
            </div>
            <div>
                <span>Settings</span>
            </div>
        </nav>
    )
}

export default Menu
