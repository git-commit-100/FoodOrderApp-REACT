import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Error from "../src/components/UI/Error";
import Success from "./components/UI/Success";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  function showCartHandler() {
    setShowCart(true);
  }

  function hideCartHandler() {
    setShowCart(false);
  }

  function handleShowError(errMsg) {
    setError(errMsg);
  }

  function handleHideError() {
    setError();
  }

  function handleShowSuccessModal() {
    setSuccess(true);
  }

  function handleHideSuccessModal() {
    setSuccess(false);
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Meals />
      {showCart && (
        <Cart
          onHideCart={hideCartHandler}
          onError={handleShowError}
          onSuccess={handleShowSuccessModal}
        />
      )}
      {error && <Error errorMsg={error} onHideCart={handleHideError} />}
      {success && <Success onHideCart={handleHideSuccessModal} />}
    </CartProvider>
  );
}

export default App;
