import React from "react";
import styles from "./Checkout.module.css";

function Checkout(props) {
  return (
    <div className={styles["checkout-div"]}>
      <form className={styles["checkout-form"]}>
        <label className={styles["label-name"]}>Your Name</label>
        <input type="text" required autoComplete="none" />

        <label className={styles["label-house-no"]}>
          Wing-Flat Building / House&nbsp;
          <span className={styles["label-example"]}>(eg:- D-01 Abhilasha)</span>
        </label>
        <input type="text" required autoComplete="none" />

        <label className={styles["label-street-name"]}>
          Street / Area&nbsp;
          <span className={styles["label-example"]}>(eg:- Sai Nagar)</span>
        </label>
        <input type="text" required autoComplete="none" />

        <label className={styles["label-city"]}>
          City Pincode
          <span className={styles["label-example"]}>(eg:- Vasai 401202)</span>
        </label>
        <input type="text" required autoComplete="none" />
        
      </form>
    </div>
  );
}

export default Checkout;
