import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = () => {
  const data = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleClick = (bookToRemove) => {
    dispatch(removeBook(bookToRemove));
  };

  return (
    <ul>
      {data.map((book) => (
        <li key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <button type="button" onClick={() => handleClick(book)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Book;
