import React from 'react'
import w from "./User.module.css"

const User = (props) => {

    let followUn = props.onFollow ? 'Unfollow' : 'Follow';

    let followUnfollo = () => {
        let idUser = props.onID;
        props.onFollowun(idUser)
    }

    return (
        <div className={w.box}>
            <div className={w.ava}>
                <img src={props.onPhoto} alt="#" />
            </div>
            <div className={w.info}>
                <h3>{props.onFirstName + ' ' + props.onLastName}</h3>
                <ul className={w.items}>
                    <li>age: {props.onAge}</li>
                    <li>city: {props.onCity}</li>
                    <li>books: {props.onBooks}</li>
                    <li>frends: {props.onFrends}</li>
                </ul>
                <button onClick={followUnfollo}>{followUn}</button>
            </div>
        </div>
    )
}

export default User;