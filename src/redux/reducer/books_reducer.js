const UPDATE_TEXT = "UPDATE_TEXT_INPUT";
const UPDATE_STATE_BOOK = "UPDATE_STATE_BOOK";
const SET_BOOKS = "SET_BOOKS";

let initialState = {
  imgAva:
    "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg",
  books: [],
  valueInput: "",
};

export const books_reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        valueInput: action.newText,
      };
    case UPDATE_STATE_BOOK:
      return {
        ...state,
        books: state.books.map((i) => {
          if (i.id === action.id) {
            i.added ? (i.added = false) : (i.added = true);
            return { ...i };
          }
          return i;
        }),
      };
    case SET_BOOKS:
      return { ...state, books: [...action.books] };
    default:
      return state;
  }
};

export let actionUpdate = (text) => {
  return { type: UPDATE_TEXT, newText: text };
};

export let ACstateBook = (idBooks) => {
  return { type: UPDATE_STATE_BOOK, id: idBooks };
};

export let setBooksAC = (books) => {
  return { type: SET_BOOKS, books };
};
