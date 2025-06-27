import React from "react";

import data from "../Assets/data.js";
import Item from "../Item/Item";
import "./RelatedProducts.css";
const RelatedProducts = () => {
  return (
    <div className="related-product">
      <div className="related-title">
        <h2>Related Products</h2>
        <hr />
      </div>

      <div>
        {data.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
