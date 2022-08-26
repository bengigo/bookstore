import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <div className="links">
        <Link className="books" to="/">
          BOOKS
        </Link>
        <Link className="categories" to="/categories">
          CATEGORIES
        </Link>
      </div>
      <span className="material-symbols-outlined user">person</span>
    </nav>
  </header>
);

export default Header;
