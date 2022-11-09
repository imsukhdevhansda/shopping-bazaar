import React from "react";
import { useSelector } from "react-redux";
import CartNav from "../Components/Cart-Components/CartNav";
import LeftItemBox from "../Components/Cart-Components/LeftItemBox";
import RightItemBox from "../Components/Cart-Components/RightItemBox";

const Cart = () => {
  const user = useSelector((store) => console.log(store)); //For testing
  return (
    <div>
      <CartNav />
      <LeftItemBox />
      <RightItemBox />
    </div>
  );
};

export default Cart;
