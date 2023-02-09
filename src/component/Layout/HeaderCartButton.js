import CartIcon from "../Cart/CartIcon";
import cartObj from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const HeaderCartButton = (props) => {
  const cxt = useContext(CartContext)
  return (
    <button className= {cartObj.button} onClick={props.opencart}>
      <span className={cartObj.icon}>
        <CartIcon />
      </span>
      <span>YOUR CART</span>
      <span className={cartObj.badge}>{cxt.amount}</span>
    </button>
  );
};
export default HeaderCartButton;
