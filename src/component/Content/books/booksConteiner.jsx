import Books from './books'
import {
    actionUpdate,
    ACstateBook,
    setBooksAC,
} from '../../../redux/reducer/books_reducer'
import { connect } from 'react-redux'

let mapStateToProps = state => {
    return {
        stateBooks: state.booksPage.books,
        valueText: state.booksPage.valueInput,
    }
}
let mapDisptchToProps = dispatch => {
    return {
        updateChange: text => {
            dispatch(actionUpdate(text))
        },
        updateStateBooks: idBooks => {
            dispatch(ACstateBook(idBooks))
        },
        setBooks: books => {
            dispatch(setBooksAC(books))
        },
    }
}

let BooksConteiner = connect(mapStateToProps, mapDisptchToProps)(Books)

export default BooksConteiner
