import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import banner_mens from "./Components/Assets/banner_mens.png";
import banner_women from "./Components/Assets/banner_women.png";
import banner_kids from "./Components/Assets/banner_kids.png";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={banner_mens} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={banner_women} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_kids} category="kid" />}
          />
          <Route path="/product">
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
