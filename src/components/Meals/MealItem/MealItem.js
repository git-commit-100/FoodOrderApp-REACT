import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles["meal-item"]}>
      <div className={styles["meal-item-info"]}>
        <h3 className={styles["meal-heading"]}>{props.meal}</h3>
        <p className={styles["meal-desc"]}>{props.desc}</p>
        <p className={styles["meal-price"]}>{price}</p>
      </div>
      <div className={styles["meal-item-form-div"]}>
        <MealItemForm
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 1,
          }}
        />
      </div>
    </li>
  );
}

export default MealItem;
