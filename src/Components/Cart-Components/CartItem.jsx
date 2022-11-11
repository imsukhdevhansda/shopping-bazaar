import React, { useState } from "react";
import styled from "styled-components";
import Image from "./Image";
import { BiCheck } from "react-icons/bi";
import { MdArrowDropDown, MdClose } from "react-icons/md";
import PopUpMenu from "./PopUpMenu";
import { Text } from "./StyledComponents";
import Button from "./Button";

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
  const [popUp, setPopUp] = useState(false);
  console.log("popUp:", popUp);
  const handleDeleteItem = () => {
    setPopUp(true);
    console.log(id);
  };
  const handleItemQuantity = () => {
    // setPopUp(true);
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
        {popUp && (
          <PopUpMenu>
            <Wrapper>
              <MdClose onClick={() => setPopUp(false)} />

              <MoveFromBag>
                <Image src={image} height="70px" />
                <DetailsContainer>
                  <Text fweight="bold">Remove From Bag</Text>
                  <span>Are you sure you want to move this item from bag?</span>
                </DetailsContainer>
              </MoveFromBag>
              <OptionContainer>
                <button>
                  <Text fweight="bold">REMOVE</Text>
                </button>

                <button>
                  <Text color="#ff3f6c" fweight="bold">
                    MOVE TO WISHLIST
                  </Text>
                </button>
              </OptionContainer>
            </Wrapper>
          </PopUpMenu>
        )}
      </>
      <>
        <Image height="148px" width="111px" src={image} />
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
      {/* Draft */}
      {/* <Wrapper>
        <MoveFromBag>
          <Image src={image} height="70px" />
          <DetailsContainer>
            <Text fweight="bold">Remove From Bag</Text>
            <span>Are you sure you want to move this item from bag?</span>
          </DetailsContainer>
        </MoveFromBag>
        <OptionContainer>
          <button>
            <Text fweight="bold">REMOVE</Text>
          </button>

          <button>
            <Text color="#ff3f6c" fweight="bold">
              MOVE TO WISHLIST
            </Text>
          </button>
        </OptionContainer>
      </Wrapper> */}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 100%;
  border: 1px solid #eaeaec;
  border-radius: 4px;
  padding: 16px 0 16px 16px;
  position: relative;
  & > DetailsContainer {
    height: 148px;
  }
`;
const DetailsContainer = styled.div`
  display: inline-block;
  width: 60%;
  // border: 1px solid black;
  vertical-align: top;
  padding: 0 10px;
  & > * {
    margin-bottom: 5px;
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

// Remove From Cart Styles

const MoveFromBag = styled.div`
  max-width: 480px;
  padding: 10px;
  width: 100%;
  // border: 1px solid black;
  display: flex;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70px;
    width: 370px;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  position: absolute;
  padding: 10px;
  left: 0;
  top: 0;
  transform: translate(50%, 45vh);
  background-color: white;
  & > svg {
    position: absolute;
    font-size: 25px;
    right: 1%;
    cursor: pointer;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default CartItem;
