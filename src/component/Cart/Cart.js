import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartitem = 
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    }
  return (
    <Modal clickclose = {props.closefunc}>
    <h3>
      {cartitem.name}
      </h3>
      <div className={classes.total}>
        <span>TOTAL AMOUNT</span>
        <span>34</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.closefunc}>CLOSE</button>
        <button>ORDER</button>
      </div>
    </Modal>
  );
};

export default Cart;
