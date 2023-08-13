import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartItem = () => {
    setCartIsShow(true);
  };

  const CloseCartItem = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };

  return (
    <div className='App'>
      {cartIsShow && <Cart onClose={CloseCartItem} />}
      <Header onShowCart={showCartItem} />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
