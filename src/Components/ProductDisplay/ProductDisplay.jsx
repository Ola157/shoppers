import React, { useContext } from "react";

import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import "./ProductDisplay.css";
import { CategoryContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart, cartItems } = useContext(CategoryContext);
  return (
    <div className="product-display">
      <div className="display-left">
        <div className="image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="main-image">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="ratings">
          <div className="star-list">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
          </div>
          <p>(122)</p>
        </div>
        <div className="prices">
          <p className="price-old">${product.old_price}</p>
          <p className="price-new">${product.new_price}</p>
        </div>
        <div className="description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleevs, worn as an undershirt or outer
          garment
        </div>
        <div className="size">
          <h1>Select Size</h1>
          <div className="size-options">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button className="add-to-cart" onClick={() => addToCart(product.id)}>
            Add to Cart
          </button>
          <p>{cartItems[product.id]}</p>
          <p className="category">
            <b>Category:</b> T-Shirt, Crop Top
          </p>
          <p className="tag">
            <b>Tags:</b> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
