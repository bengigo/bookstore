import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(statusCheck());
  };

  return (
    <div className="check">
      <button className="btn-check" type="button" onClick={() => handleClick()}>
        Check status
      </button>
      <p className="status">{status}</p>
    </div>
  );
};

export default Categories;
