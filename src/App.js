import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';
import { fetchBook } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBook()), []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
