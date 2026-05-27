import React, { useState, useEffect, useContext } from "react";
import Cart from "../components/Cart/Cart";
import CartContext from "./CartContext";
import AuthContext from "./AuthContext";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [showCart, setshowCart] = useState(false);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    console.log(authCtx);
    async function fetchData() {
      try {
        const getCartData = await fetch(
          `https://react-http-c4f8c-default-rtdb.firebaseio.com/${authCtx.userEmail.replace("@", "").replace(".", "")}.json`,
        );
        const cartData = await getCartData.json();
        console.log(cartData);
        if (!cartData) {
          setCart([]);
        }

        const cartItems = [];
        for (let key in cartData) {
          cartItems.push({
            firebaseId: key,
            ...cartData[key],
          });
        }
        setCart(cartItems);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (authCtx.userEmail) {
      fetchData();
    }
  }, [authCtx.userEmail]);

  const toggleCart = () => {
    setshowCart((prevShowCart) => !prevShowCart);
  };

  const addToCart = async (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id ? updatedItem : cartItem,
        ),
      );

      try {
        const response = await fetch(
          `https://react-http-c4f8c-default-rtdb.firebaseio.com/${authCtx.userEmail.replace("@", "").replace(".", "")}/${existingItem.firebaseId}.json`,
          {
            method: "PATCH",
            body: JSON.stringify(updatedItem),
          },
        );
        console.log("cart updated ");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await fetch(
          `https://react-http-c4f8c-default-rtdb.firebaseio.com/${authCtx.userEmail.replace("@", "").replace(".", "")}.json`,
          {
            method: "POST",
            body: JSON.stringify({ ...item }),
          },
        );
        const data = await response.json();
        console.log("cart updated ", data);
        const firebaseId = data.name;
        setCart((pre) => [...pre, { ...item, firebaseId }]);
        console.log("new item added");
      } catch (error) {
        console.log(error);
      }
    }

    async function sendCartData() {
      const response = await fetch(
        `https://react-http-c4f8c-default-rtdb.firebaseio.com/${authCtx.userEmail.replace("@", "").replace(".", "")}.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        },
      );
      const data = await response.json();
      console.log("cart updated ");
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
