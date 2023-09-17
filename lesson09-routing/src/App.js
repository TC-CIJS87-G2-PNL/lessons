import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/Product/subComponents/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/auth/login" element={<HomePage />} /> */}
          {/* <Route path="/auth/register" element={<HomePage />} /> */}
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
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
