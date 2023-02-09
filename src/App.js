import Header from "./component/Layout/Header";
import { useState } from "react";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [flag, setflag] = useState(false);
  const clickClose = () => {
    setflag(false);
  };

  const clickCart = () => {
    setflag(true);
  };
  return (
    <CartProvider>
      {flag && <Cart closefunc={clickClose} />}
      <Header openfunc={clickCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
