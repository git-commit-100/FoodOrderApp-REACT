import { useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import emptyCart from "../../assets/emptyCart.png";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";

function Cart(props) {
  const [showCheckout, setShowCheckout] = useState(false);
  const cart = useSelector((state) => state.cart);

  const price = `$${cart.totalPrice.toFixed(2)}`;

  function showForm() {
    setShowCheckout(true);
  }

  const cartItems = (
    <ul className={styles["cart-items-list"]}>
      {cart.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          meal={item.meal}
          quantity={item.quantity}
          price={item.price}
          onRemove
          onAdd
        />
      ))}
    </ul>
  );

  //DOM helpers
  const cartActionJsx = (
    <div className={styles["cart-action"]}>
      <button
        className={styles["cart-action-close"]}
        onClick={props.onHideCart}
      >
        Close
      </button>
      <button className={styles["cart-action-order"]} onClick={showForm}>
        Order
      </button>
    </div>
  );

  const emptyCartJsx = (
    <div className={styles["empty-cart"]}>
      <img
        className={styles["empty-cart-svg"]}
        src={emptyCart}
        alt="Cart Empty"
      />
      <p className={styles["empty-cart-text"]}>
        Your cart is empty ! Try adding something ;)
      </p>
    </div>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cart.items.length === 0 && emptyCartJsx}
      {cart.items.length > 0 && (
        <>
          {cartItems}
          <div className={styles["cart-total"]}>
            <span className={styles["cart-total-amount"]}>Total</span>
            <span className={styles["cart-total-price"]}>{price}</span>
          </div>
          {!showCheckout && cartActionJsx}
        </>
      )}
      {cart.items.length > 0 && showCheckout && (
        <Checkout
          onHideCart={props.onHideCart}
          onError={props.onError}
          onSuccess={props.onSuccess}
        />
      )}
    </Modal>
  );
}

export default Cart;
