const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RSJKbUfjBsG314btnaA5';

const DISPLAY_BOOK = 'bookstore/books/BOOK_DISPLAYED';

export const displayBook = (data) => ({
  type: DISPLAY_BOOK,
  data,
});

export const fetchBook = () => (dispatch) => {
  fetch(`${baseUrl}/books`)
    .then((response) => response.json())
    .then((json) => dispatch(displayBook(json)));
};

export const addBook = (id, title, author, category = '-') => (dispatch) => {
  fetch(`${baseUrl}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  }).then(() => dispatch(fetchBook()));
};

export const removeBook = (id) => (dispatch) => {
  fetch(`${baseUrl}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  }).then(() => dispatch(fetchBook()));
};

export default function bookReducer(state = {}, action) {
  switch (action.type) {
    case DISPLAY_BOOK:
      return action.data;
    default:
      return state;
  }
}
