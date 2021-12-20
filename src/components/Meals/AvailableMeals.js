import { useEffect, useState } from "react";
import Card from "../UI/Card";
import Loader from "react-loader-spinner";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadedMeals = [];
    const getMeals = async () => {
      const response = await fetch(
        "https://react-https-61e56-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();

      for (let key in data) {
        loadedMeals.push({
          id: key,
          ...data[key],
        });
      }
    };

    getMeals()
      .then(() => {
        setMeals(loadedMeals);
        setLoading(null);
      })
      .catch((err) => {
        setError(`${err.message} maybe retry ?`);
      });
  }, []);

  let mealList = (
    <Loader type="ThreeDots" color="#e24c06" height="1rem" width="100%" />
  );

  if (error) {
    mealList = <p className={styles["error-text"]}>{error}</p>;
  }

  if (!error && !loading) {
    mealList = meals.map((meal) => {
      return (
        <MealItem
          key={meal.id}
          id={meal.id}
          meal={meal.meal}
          desc={meal.desc}
          price={meal.price}
          poster={meal.poster}
        />
      );
    });
  }

  return (
    <Card>
      <ul className={styles["meal-list"]}>{mealList}</ul>
    </Card>
  );
}

export default AvailableMeals;
