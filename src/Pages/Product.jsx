import React, { useContext } from "react";

import "../CSS/Product.css";

import { useParams } from "react-router-dom";
import { CategoryContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import Descriptionbox from "../Components/Descriptionbox/Descriptionbox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
const Product = () => {
  const { all_product } = useContext(CategoryContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className="product">
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
