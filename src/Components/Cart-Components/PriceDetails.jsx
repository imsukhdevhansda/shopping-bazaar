import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  BaseHeader,
  ToLeft,
  ToRight,
  TextLineThrough,
  Text,
  TotalPriceBox,
} from "./StyledComponents";
import { CalculateTotal } from "./TotalCalculator";

const PriceDetails = () => {
  const [totalMrp, setTotalMrp] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const cartItems = useSelector((store) => store.AuthReducer.cart);
  console.log("cartItems:", cartItems);
  const maxPrice = CalculateTotal(cartItems, "product_strike");
  const actualAmount = CalculateTotal(cartItems, "product_discountedPrice");
  useEffect(() => {
    console.log("runnign");
    setTotalMrp(maxPrice);
    setTotalAmount(actualAmount);
  });

  return (
    <PriceDetailsBox>
      <>
        <BaseHeader>Price Details ({cartItems.length} Items)</BaseHeader>
        <div>
          <ToLeft>Total MRP</ToLeft>
          <ToRight>₹ {totalMrp}</ToRight>
        </div>
        <div>
          <ToLeft>Discount on MRP</ToLeft>
          <ToRight>
            <Text color="green">
              -₹ {maxPrice && actualAmount && maxPrice - actualAmount}
            </Text>
          </ToRight>
        </div>
        <div>
          <ToLeft>Coupon Discount</ToLeft>
          <ToRight>{<Text color="rgb(255 63 108)">Apply Coupon</Text>}</ToRight>
        </div>
        <div>
          <ToLeft>Convenience Fee</ToLeft>
          <ToRight>
            <span>
              <TextLineThrough>99</TextLineThrough>
            </span>
            <span>
              <Text color="green">FREE</Text>
            </span>
          </ToRight>
        </div>
      </>
      <hr />
      <TotalPriceBox>
        <ToLeft>Total Amount</ToLeft>
        <ToRight>{totalAmount}</ToRight>
      </TotalPriceBox>
    </PriceDetailsBox>
  );
};
const PriceDetailsBox = styled.div`
  & > * {
    margin: 15px auto;
  }
`;
export default PriceDetails;
