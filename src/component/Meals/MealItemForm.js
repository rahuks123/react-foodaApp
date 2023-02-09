import classes from "./MealItemForm.module.css";
import { useRef } from "react";
const MealItemForm = (props) => {
  const addItemClicked = (event) => {
    event.preventDefault();
    props.addToCart(amountref.current.value);
    amountref.current.value = 0;
  };
  const amountref = useRef();
  return (
    <form className={classes.form} onSubmit={addItemClicked}>
      <label>AMOUNT</label>
      <input type="number" min="1" max="5" ref={amountref} />
      <button>ADD</button>
    </form>
  );
};
export default MealItemForm;
