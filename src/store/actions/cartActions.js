import { ActionTypes } from "../constants/action-types";

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { ...product, quantity: 1 },
  };
};

export const removeFromCart = (product) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};
export const incrementQuantity = (productId) => {
  return {
    type: ActionTypes.INCREMENT_QUANTITY,
    payload: productId,
  };
};

export const decrementQuantity = (productId) => {
  return {
    type: ActionTypes.DECREMENT_QUANTITY,
    payload: productId,
  };
};
