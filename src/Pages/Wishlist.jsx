import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../Components/Cart-Components/StyledComponents";
import styled from "styled-components";
import Image from "../Components/Cart-Components/Image";
import Button from "../Components/Cart-Components/Button";
import { addToCart, removeFromWishlist } from "../Redux/AuthReducer/action";

const Wishlist = () => {
  const myWishlist = useSelector((store) => store.AuthReducer.wishlist);
  const cart = useSelector((store) => store.AuthReducer.cart);
  console.log("cart:", cart);
  const dispatch = useDispatch();

  const handleMoveItem = (payload) => {
    dispatch(addToCart(payload));
    dispatch(removeFromWishlist(payload.product_base_href));
  };

  const handleDeleteItem = (id) => {
    dispatch(removeFromWishlist(id));
  };
  //   console.log("myWishlist:", myWishlist);
  return (
    <Container>
      <Text margin="0 0 20px 0" fweight="bold" fsize={"18px"}>
        My Wishlist{" "}
        <Text fweight="100" display="inline">
          {myWishlist.length} items
        </Text>
      </Text>
      <Grid>
        {myWishlist.map((item) => {
          return (
            <ItemBox key={item.product_base_href}>
              <MdClose
                onClick={() => handleDeleteItem(item.product_base_href)}
              />
              <Image width="100%" src={item.img_responsive_src} />
              <Text fsize="13px">{item.product_product}</Text>
              <PriceWrap>
                <Text fsize="13px">{item.product_discountedPrice}</Text>
                <Text fsize="13px" decoration={"line-through"}>
                  {item.product_strike}
                </Text>
                <Text fsize="13px" color="red">
                  {item.product_discountPercentage}
                </Text>
              </PriceWrap>
              <Button onClick={() => handleMoveItem(item)} border={"none"}>
                <Text fweight="bold" color="red">
                  MOVE TO BAG
                </Text>
              </Button>
            </ItemBox>
          );
        })}
      </Grid>
      {/* If wishlist is empty */}
      {myWishlist.length === 0 && (
        <EmptyCart>
          <Text margin="0 0 20px 0" fsize="20px">
            YOUR WISHLIST IS EMPTY
          </Text>
          <Text>
            Add items that you like to your wishlist. Review them anytime and
            easily move them to the bag.
          </Text>
        </EmptyCart>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 15px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ItemBox = styled.div`
  border: 1px solid grey;
  border-radius: 4px;
  overflow: hiddn;
  position: relative;
  & > button {
    display: block;
    margin: 10px auto;
  }
  & > svg {
    cursor: pointer;
    position: absolute;
    background-color: white;
    border: 1px solid grey;
    right: 0;
    font-size: 20px;
  }
  & > ${Text} {
    padding: 5px;
  }
`;
const PriceWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const EmptyCart = styled.div`
  //   border: 1px solid black;
  width: 300px;
  margin: 20px auto;
  padding: 5px;
  & > div {
    line-height: 1.7;
    text-align: center;
  }
`;

export default Wishlist;
