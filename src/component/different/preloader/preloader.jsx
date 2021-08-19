import React from 'react'
import s from './preloader.module.css'

const Preloader = props => {
    return (
        <div className={s.box_img}>
            <img src={props.loading} alt='#' className={s.img} />
        </div>
    )
}

export default Preloader
