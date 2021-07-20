import React from 'react';
import w from './ProfileBlock.module.css'

const ProfileBlock = (props) => {
    return(
        <div className={w.flex_blog}>
            <div className={w.ava}>
                <img src={props.onState.differentPage.imgAva} alt="#" />
            </div>
            <div className={w.info}>
                <h2>Jon Wo</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    )
}

export default ProfileBlock;