import useCart from "../../hooks/useCart";
import CartItem from "./Components/CartItem";

const Cart = () => {
  const { productsInCart, getTotalCartValue } = useCart();
  return (
    <div className="cart">
      <div
        className="cart-list"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          overflow: "scroll",
          padding: "6px",
        }}
      >
        {productsInCart.map((productInCart) => (
          <CartItem key={productInCart.id} productInfo={productInCart} />
        ))}
      </div>

      <div
        className="cart-summary"
        style={{
          height: "2rem",
          padding: "1rem",
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>Total Cost</div>
        <div>{`${getTotalCartValue()}`}</div>
      </div>
    </div>
  );
};

export default Cart;
