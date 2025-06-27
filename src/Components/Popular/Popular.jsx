import React from "react";
import "./Popular.css";

import Item from "../Item/Item";
import data from "../Assets/data";
const Popular = () => {
  return (
    <div className="popular">
      <h2>Popular In Women </h2>
      <hr />
      <div>
        {data.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
