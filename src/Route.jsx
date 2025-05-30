import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./component/Pages/LandingPages/Landing";
import Auth from "./component/Pages/Auth/Auth";
import Payment from "./component/Pages/Payment/Payment";
import Orders from "./component/Pages/Orders/Orders";
import Cart from "./component/Pages/Cart/Cart";
import Results from "./component/Pages/Results/Results";
import ProductDetail from "./component/Pages/ProductDetail/ProductDetail";
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Orders />} />
        <Route path="category/:categoryName" element={<Results />} />
        <Route path="products/:productsid" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
