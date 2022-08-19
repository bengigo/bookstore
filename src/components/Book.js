import React from 'react';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <button type="button" className="remove">Remove</button>
    </div>
  );
};

export default Book;
