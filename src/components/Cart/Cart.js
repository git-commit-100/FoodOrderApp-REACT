import { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${cartCtx.totalAmount.toFixed(2)}`;

  function addCartItemHandler(item) {
    cartCtx.incrementItem(item);
  }

  function removeCartItemHandler(id) {
    cartCtx.removeItem(id);
  }

  const cartItems = (
    <ul className={styles["cart-items-list"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          meal={item.meal}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  function handleOrderSubmit() {
    //logpout items ordered
    console.log("Ordering.....");
   for(let item of cartCtx.items){
    console.log(`${item.meal} x ${item.amount}`);
   }
   console.log("Total price to pay: $",cartCtx.totalAmount.toFixed(2));
  }

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={styles["cart-total"]}>
        <span className={styles["cart-total-amount"]}>Total</span>
        <span className={styles["cart-total-price"]}>{price}</span>
      </div>
      <div className={styles["cart-action"]}>
        <button
          className={styles["cart-action-close"]}
          onClick={props.onHideCart}
        >
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className={styles["cart-action-order"]} onClick={handleOrderSubmit}>Order</button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
