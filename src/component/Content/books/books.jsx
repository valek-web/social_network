import React from "react";
import s from "./books.module.css";
import BooksInfo from "./booksInfo/booksInfo";

class Books extends React.Component {
  render = () => {
    const newSymbol = React.createRef();
    let updateChangeSymbol = () => {
      let text = newSymbol.current.value;
      this.props.updateChange(text);
    };

    let valueText = this.props.valueText;
    return (
      <div>
        <input
          className={s.input_search}
          placeholder="Name book"
          value={valueText}
          ref={newSymbol}
          onChange={updateChangeSymbol}
        ></input>
        <div className={s.books}>
          <BooksInfo
            onStateBooks={this.props.stateBooks}
            onUpdateStateBooks={this.props.updateStateBooks}
            onSetBooks={this.props.setBooks}
          />
        </div>
      </div>
    );
  }
}

export default Books;
