import React from "react";
import styled from "styled-components";
import {
  BaseHeader,
  ToLeft,
  ToRight,
  TextLineThrough,
  Text,
  TotalPriceBox,
} from "./StyledComponents";

const PriceDetails = () => {
  return (
    <PriceDetailsBox>
      <>
        <BaseHeader>Price Details (5 Items)</BaseHeader>
        <div>
          <ToLeft>Total MRP</ToLeft>
          <ToRight>₹ 9854</ToRight>
        </div>
        <div>
          <ToLeft>Discount on MRP</ToLeft>
          <ToRight>
            <Text color="green">-₹ 3650</Text>
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
        <ToRight>9854</ToRight>
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
