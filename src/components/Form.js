import React from 'react';

const Form = () => (
  <div>
    <h2>
      ADD NEW BOOK
    </h2>
    <form>
      <input placeholder="Book title" />
      <input placeholder="Author" />
      <button className="add" type="button">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
