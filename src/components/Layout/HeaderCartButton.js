import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function HeaderCartButton(props) {
  const [animateBtn, setIsAnimateBtn] = useState(false);
  const cart = useSelector((state) => state.cart);
  const btnStyles = `${styles["cart-btn"]} ${animateBtn ? styles["bump"] : ""}`;

  useEffect(() => {
    if (cart.items.length === 0) {
      return;
      //no animation
    }
    //adding animation class
    setIsAnimateBtn(true);
    /* animation only happens when styles class is added
    so on every cart item added animation class must be added
    for that it also must be removed from previous operation */

    /* setting timeout to remove animation class
    setting it 300ms as the animation duration is of 300ms */
    const timer = setTimeout(() => {
      setIsAnimateBtn(false);
    }, 300);

    //clenup function to clear up previous timelines
    return () => {
      clearTimeout(timer);
    };
  }, [cart.items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles["cart-icon"]}>
        <CartIcon />
      </span>
      <span className={styles["cart-text"]}>Your Cart</span>
      <span className={styles["cart-badge"]}>{cart.totalQuantity}</span>
    </button>
  );
}

export default HeaderCartButton;
