import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../reducers/cartSlice";

const useCart = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.itemList);
  const addProductToCart = (payload) => {
    dispatch(add(payload));
  };
  const removeProductsFromCart = (payload) => {
    dispatch(remove(payload));
  };
  const getTotalCartValue = () => {
    const value =
      productsInCart.length === 0
        ? 0
        : productsInCart.reduce(
            (accumlator, iterator) =>
              accumlator + iterator?.price * iterator?.quantity,
            0
          );
    return value;
  };

  return {
    productsInCart,
    addProductToCart,
    removeProductsFromCart,
    getTotalCartValue,
  };
};

export default useCart;
