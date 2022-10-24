import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/navigation";
import Badge from "./Components/badge";
import Newsetter from "./Components/newsletter";
import Footer from "./Components/footer";
import "../css/app.css";
import Products from "./Components/products";
import Home from "./Components/home";
import Cart from "./Components/cart";

export default () => {
  if(localStorage.getItem("total") == undefined)
    localStorage.setItem("total", "0");

  const [total, setTotal] = useState(localStorage.getItem("total"))

  useEffect(() => {
    setTotal(localStorage.getItem("total"));
  }, [total])


  return (
    <>
      <Navigation total={total}/>
      <Badge />
      <Routes>
        <Route path="/products/:id" element={<Products setTotal={setTotal}/>} />
        <Route path='/cart' element={<Cart setTotal={setTotal}/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Newsetter />
      <Footer />
    </>
  );
};
