import React from "react";
import Navbar from "./components/Navbar";
import Store from "./pages/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductContextProvider from "./Context/Cart/ProductContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Store />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    </>
  );
}

export default App;