import useCart from "../../../hooks/useCart";
import PropTypes from "prop-types";

const CartItem = ({ productInfo }) => {
  const { addProductToCart, removeProductsFromCart } = useCart();
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "25vw",
        minHeight: "2rem",
        width: "100%",
        backgroundColor: "grey",
        borderRadius: "12px",
      }}
    >
      <div className="cart-item-title">{productInfo?.title}</div>
      <div>
        <button onClick={() => addProductToCart(productInfo)}>Add</button>
        <button onClick={() => removeProductsFromCart(productInfo)}>
          Remove
        </button>
      </div>
      <div className="cart-item-title">{productInfo?.price}</div>
      <div>{`${productInfo?.quantity}`}</div>
      <div>{`${productInfo?.price * productInfo?.quantity}`}</div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
