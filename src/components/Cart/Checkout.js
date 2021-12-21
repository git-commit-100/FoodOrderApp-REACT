import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import useInput from "../../store/use-Input";
import styles from "./Checkout.module.css";

function Checkout(props) {
  const {
    value: nameInput,
    isValid: isNameInputValid,
    hasError: doesNameInputHaveError,
    handleInputChange: handleNameInputChange,
    handleInputBlur: handleNameInputBlur,
  } = useInput((name) => name.trim() !== "");

  const {
    value: houseInput,
    isValid: isHouseInputValid,
    hasError: doesHouseInputHaveError,
    handleInputChange: handleHouseInputChange,
    handleInputBlur: handleHouseInputBlur,
  } = useInput((house) => house.trim() !== "");

  const {
    value: streetInput,
    isValid: isStreetInputValid,
    hasError: doesStreetInputHaveError,
    handleInputChange: handleStreetInputChange,
    handleInputBlur: handleStreetInputBlur,
  } = useInput((street) => street.trim() !== "");

  const {
    value: cityInput,
    isValid: isCityInputValid,
    hasError: doesCityInputHaveError,
    handleInputChange: handleCityInputChange,
    handleInputBlur: handleCityInputBlur,
  } = useInput((city) => city.trim() !== "");

  const cartCtx = useContext(CartContext);

  let isFormValid = false;

  if (
    isNameInputValid &&
    isHouseInputValid &&
    isStreetInputValid &&
    isCityInputValid
  ) {
    isFormValid = true;
  }

  //request
  async function sendDataToDb(dataObj) {
    try {
      const response = await fetch(
        "https://react-https-61e56-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify(dataObj),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      //successful insertion into db
      props.onHideCart();
      cartCtx.resetCart();
      props.onSuccess();
    } catch (error) {
      props.onHideCart();
      props.onError(error.message);
    }
  }

  function handleOrderFood(e) {
    e.preventDefault();
    if (isFormValid) {
      const newUser = {
        id: new Date().getTime(),
        name: nameInput,
        house: houseInput,
        street: streetInput,
        city: cityInput,
        orderItems: [...cartCtx.items],
        totalAmount: +cartCtx.totalAmount.toFixed(2),
      };
      sendDataToDb(newUser);
    }
  }

  //DOM helpers
  const errorNameJsx = doesNameInputHaveError && (
    <p className={styles["error-text"]}>Name cannot be empty</p>
  );

  const errorHouseJsx = doesHouseInputHaveError && (
    <p className={styles["error-text"]}>This field cannot be empty</p>
  );

  const errorStreetJsx = doesStreetInputHaveError && (
    <p className={styles["error-text"]}>This field cannot be empty</p>
  );

  const errorCityJsx = doesCityInputHaveError && (
    <p className={styles["error-text"]}>This field cannot be empty</p>
  );

  return (
    <div className={styles["checkout-div"]}>
      <form className={styles["checkout-form"]} onSubmit={handleOrderFood}>
        <label className={styles["label-name"]}>Your Name</label>
        <input
          className={`${doesNameInputHaveError ? styles["input-invalid"] : ""}`}
          type="text"
          value={nameInput}
          onChange={handleNameInputChange}
          onBlur={handleNameInputBlur}
          autoComplete="none"
        />
        {errorNameJsx}

        <label className={styles["label-house-no"]}>
          Wing-Flat Building / House&nbsp;
          <span className={styles["label-example"]}>(eg:- D-01 Abhilasha)</span>
        </label>
        <input
          className={`${
            doesHouseInputHaveError ? styles["input-invalid"] : ""
          }`}
          type="text"
          value={houseInput}
          onChange={handleHouseInputChange}
          onBlur={handleHouseInputBlur}
          autoComplete="none"
        />
        {errorHouseJsx}

        <label className={styles["label-street-name"]}>
          Street / Area&nbsp;
          <span className={styles["label-example"]}>(eg:- Sai Nagar)</span>
        </label>
        <input
          className={`${
            doesStreetInputHaveError ? styles["input-invalid"] : ""
          }`}
          type="text"
          value={streetInput}
          onChange={handleStreetInputChange}
          onBlur={handleStreetInputBlur}
          autoComplete="none"
        />
        {errorStreetJsx}

        <label className={styles["label-city"]}>
          City Pincode
          <span className={styles["label-example"]}>(eg:- Vasai 401202)</span>
        </label>
        <input
          className={`${doesCityInputHaveError ? styles["input-invalid"] : ""}`}
          type="text"
          value={cityInput}
          onChange={handleCityInputChange}
          onBlur={handleCityInputBlur}
          autoComplete="none"
        />
        {errorCityJsx}

        <div className={styles["checkout-form-actions"]}>
          <button
            className={`${styles["btn"]} ${styles["btn-close"]}`}
            onClick={props.onHideCart}
          >
            Close
          </button>
          <button
            className={`${styles["btn"]} ${styles["btn-confirm"]}`}
            type="submit"
            disabled={!isFormValid}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
