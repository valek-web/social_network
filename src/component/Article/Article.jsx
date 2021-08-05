import React from 'react';
import PhotoBook from '../Content/books/booksInfo/book/photoBook/photoBook';
import q from './Article.module.css';

class Article extends React.Component {

  componentDidMount = () => {
    if (this.props.url.length == 0) {
      this.props.onSetBooks();
    }
  }

  render = () => {
    let mapBooks = this.props.url.map(i => {
      return (
        <PhotoBook onUrl={i.imgBook} key={i.id} />
      )
    })
    return (
      <article className={q.book}>
        <h2 className={q.title_}>My books:</h2>
        {mapBooks}
      </article>
    )
  }
}

export default Article;