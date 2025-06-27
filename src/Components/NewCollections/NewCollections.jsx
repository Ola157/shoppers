import React from "react";
import data from "../Assets/new_collections";
import Item from "../Item/Item";

import "./NewCollecton.css";
const NewCollections = () => {
  return (
    <div className="new-collection">
      <div className="inner-div">
        <h2>New Collection </h2>
        <hr />
        <div>
          {data.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
