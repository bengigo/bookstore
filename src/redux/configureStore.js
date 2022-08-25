import {
  createStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
