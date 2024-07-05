import { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setProductList(result.products));

    return () => {
      console.log("Aborting Effect");
    };
  }, []);

  return (
    <div className="product-list">
      {productList.map((product) => (
        <ProductCard key={product?.id} cardInfo={product} />
      ))}
    </div>
  );
};

export default ProductList;
