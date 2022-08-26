import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './Form.css';

const Form = () => {
  const [book, setBook] = useState({ title: '', author: '' });
  const { title, author } = book;
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addBook(uuidv4(), title, author));
    setBook({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleForm}>
        <input className="input-title" name="title" placeholder="Book title" onChange={handleChange} />
        <input className="input-author" name="author" placeholder="Author" onChange={handleChange} />
        <button className="add-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
