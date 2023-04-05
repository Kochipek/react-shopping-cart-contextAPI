import React, { createContext } from "react";
import { products } from "../../data";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;