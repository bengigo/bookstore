import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <Link className="books" to="/">Books</Link>
      <Link className="categories" to="/categories">Categories</Link>
    </nav>
  </header>
);

export default Header;
