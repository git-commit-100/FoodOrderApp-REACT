import styles from "./MealItemForm.module.css";

function MealItemForm(props) {
  return (
    <form className={(styles["meal-item"])}>
      <label htmlFor={props.input.id} className={styles["form-label"]}>{props.label}</label>
      <input {...props.input} className={styles["form-input"]}/>
      <button type="button" className={styles["form-btn"]}>+ Add</button>
    </form>
  );
}

export default MealItemForm;
