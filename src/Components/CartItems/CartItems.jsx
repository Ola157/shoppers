import React, { useContext } from "react";
import { CategoryContext } from "../../Context/ShopContext";

import "./CartItems.css";
import cart_cross_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  const { all_product, removeFromCart, cartItems, getTotalCartAmount } =
    useContext(CategoryContext);

  return (
    <div className="cartitems">
      <div className="cartitems-titles">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item, i) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={i}>
              <div className="cartitems-format">
                <img className="product-image" src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button>{cartItems[item.id]}</button>
                <p>{item.new_price * cartItems[item.id]}</p>
                <img
                  className="remove-button"
                  src={cart_cross_icon}
                  alt=""
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
