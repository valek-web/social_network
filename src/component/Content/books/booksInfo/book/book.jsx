import React from 'react'
import i from './book.module.css'

const Book = (props) => {
    return(
            <div className={i.conteiner}>
                <div className={i.imgBook}>
                    <img src={props.url} alt="#" />
                </div>
                <div className={i.info_of_Book}>
                    <h3 className={i.name}>{props.name}</h3>
                    <p className={i.description}>Leo, non tempus quis, quis, morbi venenatis vestibulum risus cras sit tortor, leo, vulputate est. 
                       Non lacinia non nulla et. Sed consectetur nulla mollis urna elit. Tempus aenean molestie ex. Odio. Dictumst. 
                       Eget dictum molestie lacinia ornare amet, interdum adipiscing et eleifend malesuada cursus es</p>
                </div>
            </div>
    )
}

export default Book;