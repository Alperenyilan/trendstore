const ProductItem = ({ product }) => {
  const { name, img, description, price } = product;
  return (
    <li>
      <img src={img} alt={name} />
      <h3 className='product-title'>{name}</h3>
      <p>{description}</p>
    </li>
  );
};

export default ProductItem;
