import React, { useContext } from "react";
import { CategoryContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";

import "../CSS/ShopCategory.css";
const ShopCategory = (props) => {
  const { all_product } = useContext(CategoryContext);

  return (
    <div className="shopcategory">
      <div className="banner">
        <img src={props.banner} alt="" />
      </div>
      <div className="display-panel">
        <p className="showing">
          <b>Showing 1-12</b> out of 36 products
        </p>
        <div className="dropdown">
          <span>Sort by</span>
          <img src={dropdown_icon} alt="" />{" "}
        </div>
      </div>
      <div className="product-list">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item item={item} key={i} />;
          } else {
            return null;
          }
        })}
      </div>
      <button className="load-more">Explore More</button>
    </div>
  );
};

export default ShopCategory;
