import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import AlbumDetail from "./pages/AlbumDetail/AlbumDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/album/:id" element={<AlbumDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
/*
  Homepage:       /
  Login:          /login
  Signup          /signup
  Movie Detail    /movies/:id
  Page not found  /đường-dẫn-còn-lại
*/
