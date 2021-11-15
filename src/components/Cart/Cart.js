import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

function Cart() {
  const cartItems = (
    <ul className={styles["cart-items-list"]}>
      <div className={styles["cart-items-info"]}>
        <span className={styles["cart-info-meal"]}>Meal Added</span>
        <span className={styles["cart-info-amount"]}>Amount</span>
      </div>
      {[
        { id: "c1", meal: "Dragon Fire Pizza", amount: 2 },
        { id: "c2", meal: "Jumbo Monster Burger", amount: 2 },
        { id: "c3", meal: "Special Indian Curry", amount: 1 },
      ].map((item) => (
        <li className={styles["cart-items"]}>
          <span className={styles["cart-item-meal"]}>{item.meal}</span>
          <span className={styles["cart-item-amount"]}>{item.amount}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles["cart-total"]}>
        <span className={styles["cart-total-amount"]}>Total Amount</span>
        <span className={styles["cart-total-price"]}>45.99</span>
      </div>
      <div className={styles["cart-action"]}>
        <button className={styles["cart-action-close"]}>Close</button>
        <button className={styles["cart-action-order"]}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
