import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(statusCheck());
  };

  return (
    <div>
      <button type="button" onClick={() => handleClick()}>
        Check status
      </button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
