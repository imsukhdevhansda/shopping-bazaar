import React from "react";
import styled from "styled-components";
import ContentDetails from "../Components/Cart-Components/ContentDetails";
import CartNav from "../Components/Cart-Components/CartNav";
import PriceDetails from "../Components/Cart-Components/PriceDetails";
import LeftContentBox from "../Components/Cart-Components/LeftContentBox";
import RightContentBox from "../Components/Cart-Components/RightContentBox";

const CheckoutAddress = () => {
  return (
    <Container>
      <CartNav />
      <LeftContentBox>
        <ContentDetails />
      </LeftContentBox>
      <RightContentBox>
        <PriceDetails />
      </RightContentBox>
    </Container>
  );
};

const Container = styled.div`
  font-size: 12px;
`;
export default CheckoutAddress;
