import React from "react";
import i from "./book.module.css";
import PhotoBook from "./photoBook/photoBook";

const Book = (props) => {
  let stateBook = props.added ? "Delete" : "Add";

  let changeOfState = () => {
    let idBook = props.onID;
    props.updateStateBook(idBook);
  };

  return (
    <div className={i.conteiner}>
      <div className={i.box_img}>
        <PhotoBook onUrl={props.url} />
      </div>
      <div className={i.info_of_Book}>
        <h3 className={i.name}>{props.name}</h3>
        <p className={i.description}>
          Leo, non tempus quis, quis, morbi venenatis vestibulum risus cras sit
          tortor, leo, vulputate est. Non lacinia non nulla et. Sed consectetur
          nulla mollis urna elit. Tempus aenean molestie ex. Odio. Dictumst.
          Eget dictum molestie lacinia ornare amet, interdum adipiscing et
          eleifend malesuada cursus es
        </p>
        <button onClick={changeOfState}>{stateBook}</button>
      </div>
    </div>
  );
};

export default Book;
