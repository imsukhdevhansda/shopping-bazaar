import React from "react";
import styled from "styled-components";
import CartNav from "../Components/Cart-Components/CartNav";
import LeftItemBox from "../Components/Cart-Components/LeftItemBox";
import RightItemBox from "../Components/Cart-Components/RightItemBox";
import Footer from "../Components/Footer/Footer";

const Cart = () => {
  // const user = useSelector((store) => console.log(store)); //For testing
  return (
    <CartContainer>
      <CartNav />
      <LeftItemBox />
      <RightItemBox />
      <hr />
      <Footer />
    </CartContainer>
  );
};

const CartContainer = styled.div`
  font-size: 13px;
  & svg {
    display: inline;
  }
`;

export default Cart;
