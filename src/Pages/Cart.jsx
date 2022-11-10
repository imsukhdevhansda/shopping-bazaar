import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartNav from "../Components/Cart-Components/CartNav";
import LeftItemBox from "../Components/Cart-Components/LeftItemBox";
import RightItemBox from "../Components/Cart-Components/RightItemBox";

const Cart = () => {
  const user = useSelector((store) => console.log(store)); //For testing
  return (
    <CartContainer>
      <CartNav />
      <LeftItemBox />
      <RightItemBox />
      <hr />
    </CartContainer>
  );
};

const CartContainer = styled.div`
  font-size: 13px;
`;

export default Cart;
