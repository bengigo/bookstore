import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Form />
    </BrowserRouter>
  );
}

export default App;
