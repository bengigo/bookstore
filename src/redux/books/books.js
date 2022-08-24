import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = [
  {
    id: uuidv4(),
    title: 'The Stranger',
    author: 'Albert Camus',
  },
  {
    id: uuidv4(),
    title: 'Les Miserables',
    author: 'Victor Hugo',
  },
];

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

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
}
