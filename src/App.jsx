import React from "react";
import "../src/App.css";
import HooksIntro from "./pages/HooksIntro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./reactQueryAdvance/Products";
import ProductsDebug from "./reactQueryAdvance/ProductsDebug";
import { CountContextProvider } from "./context/CountContext";
import { CountReducerProvider } from "./context/CountReducerContext";

const App = () => {
  return (
    <>
      <CountReducerProvider>
        <CountContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HooksIntro />} />
              <Route path="/reactquery" element={<Products />} />
              <Route path="/products" element={<ProductsDebug />} />
            </Routes>
          </BrowserRouter>
        </CountContextProvider>
      </CountReducerProvider>
    </>
  );
};

export default App;
