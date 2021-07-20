import React from 'react'
import Book from './book/book';

const BooksInfo = (props) => {
    let booksMap = props.onStateBooks.map(i => <Book url={i.imgBook} name={i.nameBook} key={i.id}/>)

    return (
    <div>
        {booksMap}
    </div>
    )
}

export default BooksInfo;