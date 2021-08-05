import React from 'react';
import i from "./photoBook.module.css";

const PhotoBook = (props) => {
    return (
        <div className={i.imgBook}>
            <img src={props.onUrl} alt="#" />
        </div>
    )
}

export default PhotoBook;