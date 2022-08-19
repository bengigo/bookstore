import React from 'react';
import Book from './Book';

// since there is no data yet, using a hard coded array to present the functionality

const Books = () => {
  const data = [
    {
      title: 'Dune',
      author: 'Frank Herbert',
    },
  ];

  return data.map((book) => (
    <Book key={1} title={book.title} author={book.author} />
  ));
};

export default Books;
