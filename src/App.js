import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  function showCartHandler() {
    setShowCart(true);
  }

  function hideCartHandler() {
    setShowCart(false);
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {showCart && <Cart onHideCart={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
