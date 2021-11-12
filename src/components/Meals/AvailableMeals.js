import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem";

//dummy meals object
const DUMMY_MEALS = [
  {
    id: 1,
    meal: "American Chinese Choupsey",
    desc: "Mixture of noodles and rice with soya and garlic",
    price: 11.69,
  },
  {
    id: 2,
    meal: "Italiano White Pasta",
    desc: "Sweet mayo with veggies and pasta",
    price: 10.89,
  },
  {
    id: 3,
    meal: "Special Indian Curry",
    desc: "Spicy curry with authentic indian touch",
    price: 14.49,
  },
  {
    id: 4,
    meal: "Dragon Fire Pizza",
    desc: "Barbecue sauce and mushrooms with thin crust",
    price: 12.49,
  },
  {
    id: 5,
    meal: "Jumbo Monster Burger",
    desc: "Veggies with 3 chicken patties and ketchup",
    price: 21.89,
  },
];

function AvailableMeals() {
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        meal={meal.meal}
        desc={meal.desc}
        price={meal.price}
      />
    );
  });

  return (
    <Card>
      <ul className={styles["meal-list"]}>{mealList}</ul>
    </Card>
  );
}

export default AvailableMeals;
