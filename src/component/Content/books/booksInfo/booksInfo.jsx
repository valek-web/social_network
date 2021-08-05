import React from "react";
import Book from "./book/book";



class BooksInfo extends React.Component {

  componentDidMount = () => {
    if (this.props.onStateBooks.length == 0) {
      this.props.onSetBooks();
    }
  }

  render = () => {
    let booksMap = this.props.onStateBooks.map((i) => (
      <Book
        url={i.imgBook}
        name={i.nameBook}
        key={i.id}
        onID={i.id}
        added={i.added}
        updateStateBook={this.props.onUpdateStateBooks}
      />
    ));

    return <div>{booksMap}</div>
  }
}

export default BooksInfo;
