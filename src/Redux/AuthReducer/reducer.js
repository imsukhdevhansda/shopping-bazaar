// import * as types from "./actionTypes";
const initialState = {
  name: null, //For displaying the login user name
  userId: null, //Can be user Email,Mobile Number
  mobile_number: null, //required for order place
  wishlist: [], //Array of objects
  cart: [], //Array of objects products->(image,brand,title,price,MRP,size,qty=1)
  address: { pincode: null, address: null, locality: null }, //For order placing
  isError: false,
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case "EMAIL_LOGIN_SUCCESS":
      return { ...state, name: payload.displayName, userId: payload.uid };
    default:
      return state;
  }
};
