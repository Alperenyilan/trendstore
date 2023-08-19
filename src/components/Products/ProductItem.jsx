import Rating from "./Rating";
import "./ProductItem.css";
import Card from "../UI/Card";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
// eslint-disable-next-line react/prop-types
const ProductItem = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { name, description, img, price } = product;
  const { addItem } = useContext(CartContext);
  return (
    <Card>
      <img src={img} alt={name} />
      <h3 className='product-title'>{name}</h3>
      <p>{description}</p>
      <div className='product-info'>
        <Rating />
        <span className='price'>{price}</span>
      </div>
      <button className='add-to-cart' onClick={() => addItem(product)}>
        Sepete Ekle
      </button>
    </Card>
  );
};

export default ProductItem;
