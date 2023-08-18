/* eslint-disable react/prop-types */
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { CartContext } from "../../context/CartProvider";

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);
  return (
    <button className='button' onClick={onShowCart}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className='badge'>0</span>
    </button>
  );
};

export default HeaderCartButton;
