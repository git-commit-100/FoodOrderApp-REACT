import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartContext = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedAmount };
  }
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartContext
  );

  function addItemToCart(item) {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  }
  function removeItemFromCart(id) {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
  }

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
