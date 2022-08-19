import "./App.css";
import Books from "./components/Books";
import Book from "./components/Book";
import Form from "./components/Form";
import Categories from "./components/Categories";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
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
