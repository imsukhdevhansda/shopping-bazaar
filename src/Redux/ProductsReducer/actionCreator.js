import * as types from "./actionTypes";
import axios from "axios";

let getProductsRequest = () => {
  return { type: types.GET_PRODUCTS_REQUEST };
};

let getProductsSuccess = (payload) => {
  return { type: types.GET_PRODUCTS_SUCCESS, payload };
};

let getProductsFailure = () => {
  return { type: types.GET_PRODUCTS_FAILURE };
};

const getProducts = (queryParams) => (dispatch) => {
  dispatch(getProductsRequest());
  axios
    .get(
      `https://shoppingbazaar.onrender.com/api/men_products`,
      queryParams
    )
    .then((res) => {
      // console.log(res);
      dispatch(getProductsSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getProductsFailure());
    });
};

export { getProducts };


// ?_page=2&_limit=35