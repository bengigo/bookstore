import React from 'react';
import Book from './Book';
import Form from './Form';

// since there is no data yet, using a hard coded array to present the functionality

const Books = () => {
  const Display = () => {
    const data = [
      {
        title: 'Dune',
        author: 'Frank Herbert',
      },
    ];

    return (
      data.map((book) => <Book key={1} title={book.title} author={book.author} />)

    );
  };

  return (
    <div>
      <Display />
      <Form />
    </div>
  );
};

export default Books;
