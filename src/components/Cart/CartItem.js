import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import styles from "./CartItem.module.css";

function CartItem(props) {
  const dispatch = useDispatch();

  const itemObj = {
    id: props.id,
    meal: props.meal,
    price: props.price,
    quantity: 1,
  };

  function addItemToCartHandler() {
    dispatch(cartActions.addItems(itemObj));
  }
  function removeItemFromCartHandler() {
    dispatch(cartActions.removeItems(itemObj));
  }

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h3>{props.meal}</h3>
        <div className={styles.summary}>
          <span className={styles.price}>{`$${props.price.toFixed(2)}`}</span>
          <span className={styles.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={removeItemFromCartHandler}>−</button>
        <button onClick={addItemToCartHandler}>+</button>
      </div>
    </li>
  );
}

export default CartItem;
