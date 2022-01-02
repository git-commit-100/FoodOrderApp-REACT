import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [
    /* {id: "", meal: "", quantity: "", price: ""} */
  ],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItems(state, action) {
      const itemToBeAdded = action.payload;
      const itemInCart = state.items.find(
        (item) => item.id === itemToBeAdded.id
      );
      if (!itemInCart) {
        //not in cart
        state.items.push(itemToBeAdded);
      } else {
        //item in cart
        itemInCart.quantity++;
      }
      state.totalQuantity++;
      state.totalPrice = state.totalPrice + itemToBeAdded.price;
      state.totalPrice = +state.totalPrice.toFixed(2);
    },

    removeItems(state, action) {
      const itemToBeRemoved = action.payload;
      const itemInCart = state.items.find(
        (item) => item.id === itemToBeRemoved.id
      );
      if (itemInCart.quantity === 1) {
        //remove item entirely from cart
        state.items = state.items.filter(
          (item) => item.id !== itemToBeRemoved.id
        );
      } else {
        //decrease quantity
        itemInCart.quantity--;
      }
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - itemToBeRemoved.price;
      state.totalPrice = +state.totalPrice.toFixed(2);
    },

    resetCart(state) {
      state = Object.assign(state, cartInitialState);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
