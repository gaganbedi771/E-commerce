import React, { createContext } from "react";

const CartContext = React.createContext({
  showCart: false,
  toggleCart: () => {},
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
});

export default CartContext;
