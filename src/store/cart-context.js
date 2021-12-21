import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItem: (id) => {},
  incrementItem: (item) => {},
  resetCart: () => {},
});

export default CartContext;
