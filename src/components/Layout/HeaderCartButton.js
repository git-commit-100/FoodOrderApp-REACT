import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  //numberOfCartItems must be different meals and not their amount
  const numberOfCartItems = cartCtx.items.length;

  return (
    <button className={styles["cart-btn"]} onClick={props.onClick}>
      <span className={styles["cart-icon"]}>
        <CartIcon />
      </span>
      <span className={styles["cart-text"]}>Your Cart</span>
      <span className={styles["cart-badge"]}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
