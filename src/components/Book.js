import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';

const Book = () => {
  const data = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleClick = (bookToRemove) => {
    dispatch(removeBook(bookToRemove));
  };

  return (
    <ul>
      {Object.keys(data).map((book) => (
        <li key={book}>
          <p>{data[book][0].title}</p>
          <p>{data[book][0].author}</p>
          <button type="button" onClick={() => handleClick(book)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Book;
