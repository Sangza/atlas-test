import {
  ADD_TO_CART,
  ADD_TO_CART_REQUEST,
  REMOVE_ITEM_CART,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import axios from "axios";

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART_REQUEST });
  const { data } = await axios.get(`/api/v1/product/${id}`);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.stock,
      seller: data.product.user,
      quantity,
    },
  });

  //save the cart item in the local storage, so that when we reload the page, it will have to get the items from the localstorage

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemFromcart = (id) => async (dispatch, getState) => {
  dispatch({ type: REMOVE_ITEM_CART, payload: id });

  //save the cart item in the local storage, so that when we reload the page, it will have to get the items from the localstorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch, getState) => {
  dispatch({ type: SAVE_SHIPPING_INFO, payload: data });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
