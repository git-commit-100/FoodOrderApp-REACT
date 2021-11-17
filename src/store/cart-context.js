import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItem: (id) => {},
  incrementItem: (item) => {},
});

export default CartContext;
