import React from "react";
import s from "./books.module.css";
import BooksInfo from "./booksInfo/booksInfo";

const Books = (props) => {
  const newSymbol = React.createRef();
  let updateChangeSymbol = () => {
    let text = newSymbol.current.value;
    props.updateChange(text);
  };

  let valueText = props.valueText;
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
          onStateBooks={props.stateBooks}
          onUpdateStateBooks={props.updateStateBooks}
          onSetBooks={props.setBooks}
        />
      </div>
    </div>
  );
};

export default Books;
