const UPDATE_TEXT = "UPDATE_TEXT_INPUT";
const UPDATE_STATE_BOOK = "UPDATE_STATE_BOOK";
const SET_BOOKS = "SET_BOOKS";

let initialState = {
  imgAva:
    "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg",
  books: [],
  valueInput: "",
};

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
      return { ...state, books: inition };
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
  return { type: SET_BOOKS };
};
