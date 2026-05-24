import React, { useState } from "react";
import Cart from "../components/Cart/Cart";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  // const CartContext = React.createContext({
  //   showCart: false,
  //   toggleCart: () => {},
  //   cartItems: [],
  //   addToCart: () => {},
  //   removeFromCart: () => {},
  //   updateCartItemQuantity: () => {},
  // });

  const [cart, setCart] = useState([]);
  const [showCart, setshowCart] = useState(false);

  const toggleCart = () => {
    setshowCart((prevShowCart) => !prevShowCart);
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider
      value={{ showCart, toggleCart, cart, addToCart, removeFromCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
