import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

function HeaderCartButton() {
    return ( 
        <button className={styles["cart-btn"]}>
            <span className={styles["cart-icon"]}>
                <CartIcon />
            </span>
            <span className={styles["cart-text"]}>Your Cart</span>
            <span className={styles["cart-badge"]}>3</span>
        </button>
     );
}

export default HeaderCartButton;