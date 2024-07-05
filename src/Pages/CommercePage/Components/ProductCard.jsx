import useCart from "../../../hooks/useCart";
import PropTypes from "prop-types";

const ProductCard = ({ cardInfo }) => {
  const { addProductToCart } = useCart();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "12px",
        height: "10rem",
        width: "8rem",
        backgroundColor: "grey",
        background: "rgba(100,100,100,0.5)",
        borderRadius: "6px",
        overflow: "scroll",
      }}
    >
      <div
        className="product-image"
        style={{ display: "flex", placeContent: "center" }}
      >
        <div>
          <img
            src={cardInfo?.thumbnail}
            alt={cardInfo?.title}
            style={{ maxHeight: "100px", maxWidth: "100px" }}
          ></img>
        </div>
      </div>
      <div
        className="product-title"
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          justifyContent: "center",
          fontSize: "12px",
        }}
      >
        <div className="name">{cardInfo?.title}</div>
        <div className="price">{`${cardInfo?.price}$`}</div>
        <div></div>
        <div>
          <button onClick={() => addProductToCart(cardInfo)}>Add</button>
        </div>
      </div>
      <div className="product-description" style={{ fontSize: "10px" }}>
        {cardInfo?.description}
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  cardInfo: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
