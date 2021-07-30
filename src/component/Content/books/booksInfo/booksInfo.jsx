import React from "react";
import Book from "./book/book";

let inition = [
  {
    nameBook: "A byte of python",
    id: 0,
    imgBook:
      "https://pythonchik.ru/pic/lb1/intext_cae8aeeb-ee7e-40ac-870f-bc59e3b65146_big.webp",
    added: true,
  },
  {
    nameBook: "American Marxis",
    id: 1,
    imgBook:
      "https://images-na.ssl-images-amazon.com/images/I/51Hj-Lfw+0S._AC_SX184_.jpg",
    added: false,
  },
  {
    nameBook: "Where's Spot?",
    id: 2,
    imgBook:
      "https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_SX184_.jpg",
    added: true,
  },
  {
    nameBook: "Ridgeline: A Novel",
    id: 3,
    imgBook:
      "https://images-na.ssl-images-amazon.com/images/I/41HbeJH0GtL._SX329_BO1,204,203,200_.jpg",
    added: false,
  },
];

class BooksInfo extends React.Component {

  componentDidMount = () => {
    if (this.props.onStateBooks.length == 0) {
      this.props.onSetBooks(inition);
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
