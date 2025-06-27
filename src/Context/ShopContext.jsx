import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import CartItems from "../Components/CartItems/CartItems";

export const CategoryContext = createContext();

// let cartValue = 0;

const getDefaultCart = () => {
  const cart = {};

  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0;
  }

  return cart;
};

const ShopContext = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  return (
    <CategoryContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems,
        getTotalCartAmount,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default ShopContext;
