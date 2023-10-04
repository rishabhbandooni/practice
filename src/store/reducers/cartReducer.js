// store/reducers/cartReducer.js
import { ActionTypes } from "../constants/action-types";

const initialState = {
  cartItems: [], // This array will store the items in the cart
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // Product already exists in cart, increment its quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex].quantity++;
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // Product is not in the cart, add it
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case ActionTypes.REMOVE_FROM_CART:
      // Remove the product from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case ActionTypes.INCREMENT_QUANTITY:
      // Increment the quantity of a specific product
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case ActionTypes.DECREMENT_QUANTITY:
      // Decrement the quantity of a specific product, and remove if it becomes 0
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0), // Remove items with quantity 0
      };

    default:
      return state;
  }
};
