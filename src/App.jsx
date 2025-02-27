import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Products from "./components/Products";
import Cart from "./components/cart";
import Contact from "./components/contact";
import Shop from "./components/shop";
import Benefits from "./components/benefits";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/benefits" element={<Benefits />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
