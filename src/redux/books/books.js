const baseUrl =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RSJKbUfjBsG314btnaA5";

const ADD_BOOK = "bookstore/books/ADD_BOOK";
const REMOVE_BOOK = "bookstore/books/REMOVE_BOOK";
const DISPLAY_BOOK = "bookstore/books/BOOK_DISPLAYED";

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book,
  };
}

export function removeBook(index) {
  return {
    type: REMOVE_BOOK,
    payload: index,
  };
}

export function displayBook() {
  return {
    type: DISPLAY_BOOK,
    data,
  };
}

export function fetchBook() {
  return dispatch => {
      fetch(`${baseUrl}/books`)
      .then((response) => response.json())
  }
}

export default function bookReducer(state = {}, action) {
  switch (action.type) {
    case DISPLAY_BOOK:
      return action.data;
    // case ADD_BOOK:
    //   return [...state, action.payload];
    // case REMOVE_BOOK:
    //   return [...state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
}
