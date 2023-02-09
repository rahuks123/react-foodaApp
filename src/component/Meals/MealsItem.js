import classes from "./MealsItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const MealsItem = (props) => {
  const cxt = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cxt.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>

        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{props.meal.price}</div>
      </div>
      <div>
        <MealItemForm addToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
