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

export const addToCart = (payload) => {
  return {
    type: types.ADD_CART_ITEM,
    payload,
  };
};

export const removeFromWishlist = (payload) => {
  return {
    type: types.REMOVE_WISHLIST_ITEM,
    payload,
  };
};

export const setCartEmpty = () => {
  return {
    type: types.MAKE_CART_EMPTY,
  };
};
