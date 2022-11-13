import React, { useState } from "react";
import styled from "styled-components";
import Image from "./Image";
import { BiCheck } from "react-icons/bi";
import { MdArrowDropDown, MdClose } from "react-icons/md";
import PopUpMenu from "./PopUpMenu";
import { Text } from "./StyledComponents";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  addToWishList,
  modifyItemQuantity,
  modifyItemSize,
  removeFromCart,
} from "../../Redux/AuthReducer/action";

const quantityItem = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

const CartItem = ({
  img_responsive_src,
  product_base_href,
  product_brand,
  product_product,
  sold = product_brand,
  id,
  size,
  selected_size,
  product_discountedPrice,
  product_strike,
  product_discountPercentage,
}) => {
  const [quantity, setQuantity] = useState("1");
  const [selectedSize, setSelectedSize] = useState(selected_size || "M");
  const [popUp, setPopUp] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(removeFromCart(id));
  };
  const moveToWishList = () => {
    const payload = {
      img_responsive_src,
      product_base_href,
      product_brand,
      product_product,
      sold: product_brand,
      size,
      product_discountedPrice,
      product_strike,
      product_discountPercentage,
    };
    dispatch(addToWishList(payload));
    dispatch(removeFromCart(id));
  };
  const handleItemQuantity = (e) => {
    setQuantity(e.target.value);
    const payload = { id, quantity: e.target.value };
    dispatch(modifyItemQuantity(payload));
  };
  const handleItemSize = (e) => {
    setSelectedSize(e.target.value);
    const payload = { id, size: e.target.value };
    dispatch(modifyItemSize(payload));
  };
  return (
    <CartContainer>
      <RemoveCart onClick={() => setPopUp(true)}>
        <MdClose />
      </RemoveCart>
      <>
        {popUp && (
          <PopUpMenu>
            <Wrapper>
              <MdClose onClick={() => setPopUp(false)} />

              <MoveFromBag>
                <Image src={img_responsive_src} height="70px" />
                <DetailsContainer>
                  <Text fweight="bold">Remove From Bag</Text>
                  <span>Are you sure you want to move this item from bag?</span>
                </DetailsContainer>
              </MoveFromBag>
              <OptionContainer>
                <Button onClick={handleDeleteItem} border="none">
                  <Text fweight="bold">REMOVE</Text>
                </Button>

                <Button onClick={moveToWishList} border="none">
                  <Text color="#ff3f6c" fweight="bold">
                    MOVE TO WISHLIST
                  </Text>
                </Button>
              </OptionContainer>
            </Wrapper>
          </PopUpMenu>
        )}
      </>
      <>
        <Image height="148px" width="111px" src={img_responsive_src} />
      </>
      <DetailsContainer>
        <div>{product_brand}</div>
        <div>{product_product}</div>
        <div>Sold by: {sold}</div>
        <div>
          <select value={selectedSize} onChange={handleItemSize}>
            {size.map((size) => {
              return (
                <option key={size} value={size}>
                  {size}
                </option>
              );
            })}
          </select>
          <select value={quantity} onChange={handleItemQuantity}>
            <option value={1}>{1}</option>
            {quantityItem.map((qty) => {
              return (
                <option key={qty} value={qty}>
                  {qty}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <PriceTag>
            {/*₹ */}
            {product_discountedPrice}
          </PriceTag>
          <MRP>
            {/*₹*/} {product_strike}
          </MRP>
          <Discount>{product_discountPercentage}</Discount>
        </div>
        <div>
          <BiCheck />
          Deliverd within <b>7 Days</b>
        </div>
      </DetailsContainer>
      {/* Draft */}
      {/* <Wrapper>
        <MoveFromBag>
          <Image src={img_responsive_src} height="70px" />
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
  width: 350px;
  position: relative;
  padding: 10px;
  margin: auto;
  transform: translate(0, 45vh);
  background-color: white;
  border-radius: 4px;
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
