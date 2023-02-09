import { Fragment } from "react"
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import mealPic from "../../assests/meals.jpg";
const Header = (props)=>{
    return (<Fragment>
        <header className={classes.header}>
            <h2>REACTMEALS</h2>
            <HeaderCartButton opencart = {props.openfunc}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealPic} alt=" meals is diaplyed here"/>
        </div>
        
    </Fragment>)
}
export default Header