import React from "react";
import styled from "styled-components";
import Image from "./Image";

const CartNav = () => {
  return (
    <NavigationContainer>
      <Image
        src={"https://compare.buyhatke.com/company/img/myntra_logo.png"}
        alt="Myntra Logo"
        height="35px"
      />
      <CheckoutSteps>
        <CheckoutList>BAG</CheckoutList>
        <Divider />
        <CheckoutList>ADDRESS</CheckoutList>
        <Divider />
        <CheckoutList>PAYMENT</CheckoutList>
      </CheckoutSteps>
      <SecureContainer>
        <Image
          src={
            "https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
          }
          alt="Secure Logo"
          height="28px"
        />
        <SecureDiv>100% SECURE</SecureDiv>
      </SecureContainer>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  // border: 1px solid black;
  padding: 20px 5%;
  margin: auto auto 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin: auto;
    width: 480px;
    max-width: 100%;
  }
`;
const CheckoutSteps = styled.ol`
  //   margin: 0px;
  // border: 1px solid red;
  list-style: none;
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  & * {
    font-weight: bold;
    color: #535766;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const CheckoutList = styled.li`
  // border: 1px solid blue;
  margin: 0px 5px;
  letter-spacing: 3px;
  display: inline;
`;
const Divider = styled.li`
  display: inline-block;
  border-top: 1px dashed #696b79;
  height: 4px;
  width: 10%;
  display: inline-block;
`;
const SecureContainer = styled.div`
  max-height: 78px;
  // border: 1px solid black;
`;
const SecureDiv = styled.div`
  letter-spacing: 3px;
  float: right;
`;

export default CartNav;
