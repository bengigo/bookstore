import React from 'react';
import Book from './Book';
import Form from './Form';

// since there is no data yet, using a hard coded array to present the functionality

const Display = () => {
  const data = [
    {
      title: 'Dune',
      author: 'Frank Herbert',
    },
  ];
  data.map((book) => <Book key={1} title={book.title} author={book.author} />);
};

const Books = () => (
  <div>
    <Display />
    <Form />
  </div>
);

export default Books;
