import * as types from "./actionTypes";

export const removeFromCart = (payload) => {
  return {
    type: types.REMOVE_CART_ITEM,
    payload,
  };
};

export const modifyItemQuantity = (payload) => {
  return {
    type: types.MODIFY_ITEM_QUANTITY,
    payload,
  };
};

export const modifyItemSize = (payload) => {
  return {
    type: types.MODIFY_ITEM_SIZE,
    payload,
  };
};

export const addToWishList = (payload) => {
  return {
    type: types.ADD_TO_WISHLIST,
    payload,
  };
};
