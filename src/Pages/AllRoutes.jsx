import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Men from "./Men";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Payment from "./Payment";
import CheckoutAddress from "./CheckoutAddress";
import SingleProductP from "./SingleProductP";
import Login from "./Login";
import Signup from "./Signup";
// import Login from "./Login"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/address" element={<CheckoutAddress />} />
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/Wishlist" element={<Wishlist />}></Route>
      <Route path="/mens" element={<Men />}></Route>
      <Route path="/singleProduct/:id" element={<SingleProductP />}></Route>
    </Routes>
  );
};

export default AllRoutes;
