import "./CartItem.css";
const CartItem = (props) => {
  return (
    <li className='cart-item'>
      <div className='cart-item-img'>
        <img src={props.product.img} alt='' />
      </div>
      <div className='cart-item-info'>
        <div className='cart-item-texts'>
          <b>cart item name</b>
          <div>
            <span>150 tl x</span>
            <span>1</span>
          </div>
        </div>
        <a href='/' className='cart-item-remove'>
          x
        </a>
      </div>
    </li>
  );
};

export default CartItem;
