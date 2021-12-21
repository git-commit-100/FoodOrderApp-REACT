import React from "react";
import Modal from "./Modal";
import successPng from "../../assets/order-confirmed.png";
import styles from "./Success.module.css";

function Success(props) {
  return (
    <Modal>
      <div className={styles["success-div"]}>
        <img className={styles["success-svg"]} src={successPng} alt="Yay" />
        <h3 className={styles["success-msg"]}>Yay !!</h3>
        <h3
          className={`${styles["success-msg"]} ${styles["success-msg-green"]}`}
        >
          Order Placed Successfully
        </h3>
        <h3 className={styles["success-msg"]}>
          Your order will be delievered to you in approximately&nbsp;
          <span className={styles["msg-time"]}>30mins</span>. Enjoy !
        </h3>
        <button className={styles["close-btn"]} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default Success;
