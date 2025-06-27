import React from "react";
import "./Item.css";
import { Link } from "react-router";

const Item = ({ item }) => {
  return (
    <div className="item" key={item.id}>
      <Link to={`/product/${item.id}`} onClick={window.scrollTo(0, 0)}>
        <img src={item.image} alt="" />
      </Link>
      <p className="name">{item.name}</p>
      <span className="price">
        <p className="new-price">${item.new_price}</p>
        <p className="old-price">${item.old_price}</p>
      </span>
    </div>
  );
};

export default Item;
