import React, { useState } from "react";
import styled from "styled-components";
import Image from "./Image";
import { BiCheck } from "react-icons/bi";
import { MdArrowDropDown, MdClose } from "react-icons/md";

const CartItem = ({
  image,
  brand,
  title,
  sold,
  id,
  size,
  selected_size,
  price,
  mrp,
}) => {
  //Image link, brand name,title,sold by,item id
  const [quantity, setQuantity] = useState(1);
  const handleDeleteItem = () => {
    console.log(id);
  };
  const handleItemQuantity = () => {
    console.log(quantity);
  };
  const handleItemSize = () => {
    size.forEach((size) => console.log(size));
  };
  return (
    <CartContainer>
      <RemoveCart onClick={handleDeleteItem}>
        <MdClose />
      </RemoveCart>
      <>
        <Image height="148" src={image} />
      </>
      <DetailsContainer>
        <div>{brand}</div>
        <div>{title}</div>
        <div>Sold by: {sold}</div>
        <div>
          <Options onClick={handleItemSize}>
            Size {selected_size} {<MdArrowDropDown />}
          </Options>
          <Options onClick={handleItemQuantity}>
            Qty {quantity} {<MdArrowDropDown />}
          </Options>
        </div>
        <div>
          <PriceTag>₹ {price}</PriceTag>
          <MRP>₹ {mrp}</MRP>
          <Discount>70% OFF</Discount>
        </div>
        <div>
          <BiCheck />
          Deliverd by <b>17th Nov</b>
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
  position: relative;
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

const RemoveCart = styled.div`
  font-size: 28px;
  top: 15px;
  right: 15px;
  position: absolute;
  cursor: pointer;
`;

export default CartItem;
