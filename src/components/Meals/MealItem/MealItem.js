import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";
import styles from "./MealItem.module.css";

function MealItem(props) {
  const dispatch = useDispatch();
  const itemObj = {
    id: props.id,
    meal: props.meal,
    price: props.price,
    quantity: 1,
  };
  function handleAddingItemsToCart() {
    dispatch(cartActions.addItems(itemObj));
  }

  return (
    <li className={styles["meal-item"]}>
      <div className={styles["meal-item-info"]}>
        <h3 className={styles["meal-heading"]}>{props.meal}</h3>
        <p className={styles["meal-desc"]}>{props.desc}</p>
        <p className={styles["meal-price"]}>{`$${props.price.toFixed(2)}`}</p>
      </div>
      <div className={styles["meal-item-addBtn-div"]}>
        <button
          onClick={handleAddingItemsToCart}
          className={styles["add-meal-btn"]}
        >
          Add
        </button>
      </div>
      <img
        className={styles["meal-poster"]}
        src={props.poster}
        alt="meal-poster"
      />
    </li>
  );
}

export default MealItem;
