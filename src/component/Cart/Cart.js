import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const { items, totalAmount } = useContext(CartContext);
  return (
    <Modal clickclose={props.closefunc}>
      {items.map(({ name, price, amount }, index) => (
        <div key={index}>
          <h3>
            {name} X {price} X {amount}
          </h3>
        </div>
      ))}
      <div className={classes.total}>
        <span>TOTAL AMOUNT</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.closefunc}>CLOSE</button>
        <button>ORDER</button>
      </div>
    </Modal>
  );
};

export default Cart;
