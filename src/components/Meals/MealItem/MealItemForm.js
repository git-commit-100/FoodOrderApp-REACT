import { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";

function MealItemForm(props) {

  const amountInputRef =  useRef();

  function submitHandler(e){
    e.preventDefault();
    const inputAmount = +amountInputRef.current.value;  
    if(inputAmount.toString().trim().length < 0 ||inputAmount < 1 || inputAmount > 5){
      //validation handled by HTML5
      return;
    }
    props.onAddToCart(inputAmount);
  }

  return (
    <form className={(styles["meal-item"])} onSubmit={submitHandler}>
      <label htmlFor={props.input.id} className={styles["form-label"]}>{props.label}</label>
      <input ref={amountInputRef} {...props.input} className={styles["form-input"]} required/>
      <button type="submit" className={styles["form-btn"]}>+ Add</button>
    </form>
  );
}

export default MealItemForm;
