import React from "react";
import styled from "styled-components";
import Image from "./Image";
import { BiCheck } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";

const CartItem = () => {
  return (
    <CartContainer>
      <>
        <Image
          width="148"
          src={
            "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14935572/2021/12/2/378b0fd7-9207-47b4-bdc7-05c035a4c73f1638420449785-Roadster-Burgundy-Striped-Gathered-Fitted-Top-82716384204491-1.jpg"
          }
        />
      </>
      <DetailsContainer>
        <div>Brand Name</div>
        <div>Title Of the Product</div>
        <div>Sold by: Seller Name</div>
        <div>
          <Options>Size M {<MdArrowDropDown />}</Options>
          <Options>Qty 1 {<MdArrowDropDown />}</Options>
        </div>
        <div>
          <PriceTag>₹ 789</PriceTag>
          <MRP>₹ 1299</MRP>
          <Discount>70% OFF</Discount>
        </div>
        <div>
          <BiCheck />
          Deliverd by 17th Nov
        </div>
      </DetailsContainer>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 100%;
  border: 1px solid #eaeaec;
  border-radius: 4px;
  padding: 16px;
`;
const DetailsContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0 10% 0 10px;
  & > * {
    margin-bottom: 10px;
  }
`;

const Options = styled.span`
  background-color: #bbbbbb;
  padding: 4px;
  margin-right: 7px;
  border-radius: 4px;
  cursor: pointer;
`;
const PriceTag = styled.span`
  font-weight: bold;
  margin-right: 7px;
`;

const MRP = styled.span`
  margin-right: 7px;
  color: #94969f;
  text-decoration: line-through;
`;

const Discount = styled.span`
  margin-right: 7px;
  color: #f16565;
`;

export default CartItem;
