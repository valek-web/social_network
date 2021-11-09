import React from 'react'
import w from './NameFrends.module.css'
import { NavLink } from 'react-router-dom'

const NameFrends = React.memo(() => {
    return (
        <div className={w.name}>
            <p>
                <NavLink to='../messages/0'>Tom</NavLink>
            </p>
            <p>
                <NavLink to='../messages/1'>Jon</NavLink>
            </p>
            <p>
                <NavLink to='../messages/2'>Jery</NavLink>
            </p>
            <p>
                <NavLink to='../messages/3'>Frank</NavLink>
            </p>
            <p>
                <NavLink to='../messages/4'>Jack</NavLink>
            </p>
            <p>
                <NavLink to='../messages/5'>Harry</NavLink>
            </p>
        </div>
    )
})

export default NameFrends
