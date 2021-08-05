import React from 'react';
import { connect } from 'react-redux';
import { setBooksAC } from '../../redux/reducer/books_reducer';
import Article from './Article';

let mapStateToProps = (state) => {
  return ({
    url: state.booksPage.books
  }
  )
}

let mapDisptchToProps = (disptch) => {
  return ({
    onSetBooks: () => disptch(setBooksAC())
  })
}

const ArticleComponent = connect(mapStateToProps, mapDisptchToProps)(Article)

export default ArticleComponent;