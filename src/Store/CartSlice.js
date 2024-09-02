import { createSlice } from "@reduxjs/toolkit";
import { createElement } from "react";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      let productData = action.payload;
      let pid = productData.id;

      let findExistingProductIdx = state.cart.findIndex((cartObj) => {
        return cartObj.data.id === pid;
      });
      if (findExistingProductIdx != -1) {
        let existingProduct = state.cart[findExistingProductIdx];
        existingProduct.quantity = existingProduct.quantity + 1;
      } else {
        let addProduct = { data: productData, quantity: 1 };
        state.cart.push(addProduct);
      }
    },
    removeCart: (state, action) => {
      let pid = action.payload;
      let existingProductIdx = state.cart.findIndex(
        (cartObj) => cartObj.data.id === pid
      );
      state.cart.splice(existingProductIdx, 1);
    },
    QuantityIncrease: (state, action) => {
      let pid = action.payload;
      let existingProductIdx = state.cart.findIndex(
        (cartObj) => cartObj.data.id === pid
      );
      let existingProduct = state.cart[existingProductIdx];
      existingProduct.quantity = existingProduct.quantity + 1;
    },
    QuantityDecrease: (state, action) => {
      let pid = action.payload;
      let existingProductIdx = state.cart.findIndex(
        (cartObj) => cartObj.data.id === pid
      );
      let existingProduct = state.cart[existingProductIdx];
      if (existingProduct.quantity > 1) {
        existingProduct.quantity = existingProduct.quantity - 1;
      } else {
        state.cart.splice(existingProductIdx, 1);
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  addCart,
  removeCart,
  QuantityIncrease,
  QuantityDecrease,
  clearCart,
  checkoutCart,
} = CartSlice.actions;

export default CartSlice.reducer;
