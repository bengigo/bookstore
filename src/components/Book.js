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
          <div className="summ">
            <div className="details">
              <p className="genre">Genre</p>
              <p className="title">{data[book][0].title}</p>
              <p className="author">{data[book][0].author}</p>
            </div>
            <div className="book-btns">
              <button type="button" className="btn-book">
                Comments
              </button>
              <button className="btn-book" type="button" onClick={() => handleClick(book)}>
                Remove
              </button>
              <button type="button" className="btn-book">
                Edit
              </button>
            </div>
          </div>
          <div className="progress">
            <div className="Oval-2" />
            <div className="status">
              <p className="percentage">75%</p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="chapter">
            <div className="current">CURRENT CHAPTER</div>
            <div className="chapter-name">Lorem Ipsum</div>
            <button type="button" className="btn-progress">UPDATE PROGRES</button>

          </div>
        </li>
      ))}
    </ul>
  );
};

export default Book;
