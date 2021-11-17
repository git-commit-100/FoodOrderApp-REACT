import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext , useState , useEffect } from "react";

function HeaderCartButton(props) {
  const [animateBtn, setIsAnimateBtn] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const btnStyles = `${styles["cart-btn"]} ${animateBtn ? styles["bump"] : ""}`;

  useEffect(() => {
    if (items.length === 0) {
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
  }, [items]);

  //numberOfCartItems must be their amount and not different meals
  const numberOfCartItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles["cart-icon"]}>
        <CartIcon />
      </span>
      <span className={styles["cart-text"]}>Your Cart</span>
      <span className={styles["cart-badge"]}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
