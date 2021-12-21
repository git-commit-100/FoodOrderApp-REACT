import React from "react";
import Modal from "./Modal";
import errorPng from "../../assets/error.png";
import styles from "./Error.module.css";

function Error(props) {
  return (
    <Modal>
      <div className={styles["error-div"]}>
        <img
          className={styles["error-svg"]}
          src={errorPng}
          alt="Somwthing went wrong"
        />
        <h3 className={styles["error-msg"]}>{props.errorMsg}</h3>
        <h3 className={styles["error-msg"]}>Maybe try again ?</h3>
        <button className={styles["close-error-btn"]} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default Error;
