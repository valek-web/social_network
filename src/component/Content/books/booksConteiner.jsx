import React from "react";
import s from "./books.module.css"
import Books from './books'
import { actionUpdate } from "../../../redux/reducer/different_reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return({
        stateBooks: state.differentPage.books,
        valueText: state.differentPage.valueInput
    })
}

let mapDisptchToProps = (dispatch) => {
    return({
        updateChange: (text) => {
            dispatch(actionUpdate(text))
        }
    })
}

let BooksConteiner = connect(mapStateToProps, mapDisptchToProps)(Books)

export default BooksConteiner;