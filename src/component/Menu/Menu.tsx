import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

type propsType = {
    log: boolean
}

const Menu:React.FC<propsType> = ({ log }) => {
    return (
        <nav className='.nav'>
            <div>
                <NavLink to='/profile' className='menu__element'>
                    {log ? 'Profile' : 'Sign IN'}
                </NavLink>
            </div>
            <div>
                <NavLink to='/users' className='menu__element'>
                    Users
                </NavLink>
            </div>
        </nav>
    )
}

export default Menu
