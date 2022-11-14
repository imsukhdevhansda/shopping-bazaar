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

export const updateAddress = (payload) => {
  return {
    type: types.UPDATE_ADDRESS,
    payload,
  };
};

export const loginrequest = (payload) =>(dispatch) => {
  return dispatch({ type: types.EMAIL_LOGIN_REQUEST });
};

export const loginsuccess = (payload) => (dispatch) => {
  return dispatch({ type: types.EMAIL_LOGIN_SUCCESS, payload });
};

export const googleloginrequest = (payload) => (dispatch) => {
  return dispatch({ type: types.GOOGLE_LOGIN_REQUEST });
};

export const googleloginsuccess = (payload) => (dispatch) => {
  return dispatch({ type: types.GOOGLE_LOGIN_SUCCESS, payload });
};

export const phoneloginrequest = (payload) => (dispatch) => {
  return dispatch({ type: types.PHONE_LOGIN_REQUEST });
};

export const phoneloginsuccess = (payload) => (dispatch) => {
  return dispatch({ type: types.PHONE_LOGIN_SUCCESS, payload });

};