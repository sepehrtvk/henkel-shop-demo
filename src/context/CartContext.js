import React, { useReducer, createContext } from "react";

//Fuctions
import { discountHandler } from "../helper/function";

const initialState = {
  selectedItem: [],
  itemCounter: 0,
  total: 0,
  checkOut: false,
};

const sumProduct = (items) => {
  const itemCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items.reduce(
    (total, product) => total + product.quantity * product.finalPrice,
    0
  );
  return { itemCounter, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.selectedItem.find(
          (item) => item.productId === action.payload.productId
        )
      ) {
        state.selectedItem.push({
          ...action.payload,
          quantity: 1,
          size: action.size,
        });
      }
      return {
        ...state,
        selectedItem: [...state.selectedItem],
        ...sumProduct(state.selectedItem),
        checkOut: false,
      };

    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItem.filter(
        (item) => item.productId !== action.payload.productId
      );
      return {
        ...state,
        ...sumProduct(newSelectedItem),
        selectedItem: [...newSelectedItem],
      };

    case "PLUS_ONE":
      const indexItem1 = state.selectedItem.findIndex(
        (item) => item.productId === action.payload.productId
      );
      state.selectedItem[indexItem1].quantity++;
      return {
        ...state,
        ...sumProduct(state.selectedItem),
      };

    case "MINUS_ONE":
      const indexItem2 = state.selectedItem.findIndex(
        (item) => item.productId === action.payload.productId
      );
      state.selectedItem[indexItem2].quantity--;
      return {
        ...state,
        ...sumProduct(state.selectedItem),
      };

    case "CHECKED_OUT":
      return {
        selectedItem: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      return state;
  }
};

export const CartContextProvider = createContext();

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContextProvider.Provider value={{ state, dispatch }}>
      {children}
    </CartContextProvider.Provider>
  );
};

export default CartContext;
