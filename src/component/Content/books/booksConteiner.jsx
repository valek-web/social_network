import Books from './books'
import {
    actionUpdate,
    ACstateBook,
    setBooksAC,
} from '../../../redux/reducer/books_reducer'
import { connect } from 'react-redux'
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'

let mapStateToProps = state => {
    return {
        stateBooks: state.booksPage.books,
        valueText: state.booksPage.valueInput,
        auth: state.differentPage.login,
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

export default compose(
    connect(mapStateToProps, mapDisptchToProps),
    AuthRedirect
)(Books)
