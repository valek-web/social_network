import React from 'react'
import style from './preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={style.box}>
            <div className={style.lds_spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Preloader
