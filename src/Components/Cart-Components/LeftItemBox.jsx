import React from "react";
import styled from "styled-components";
import AddressBox from "./AddressBox";
import Button from "./Button";
import CartItem from "./CartItem";
import ConvenienceBox from "./ConvenienceBox";
import OfferBox from "./OfferBox";

const LeftItemBox = () => {
  return (
    <Box>
      <AddressBox pinCode={799264} />
      <OfferBox />
      <ConvenienceBox />
      <TotalItems>
        <b>Total Items: {5}</b>
      </TotalItems>
      <CartItem />
    </Box>
  );
};

const Box = styled.div`
  border: 1px solid red;
  width: 64%;
  display: inline-block;
  padding: 0 20px 0 20%;
  & > * {
    margin: 20px 0;
  }
`;

const TotalItems = styled.div`
  padding: 16px;
`;
export default LeftItemBox;
