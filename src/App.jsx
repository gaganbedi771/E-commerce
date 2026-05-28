import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Title from "./components/Title";
import Footer from "./components/Footer";
import CartContext from "./context/CartContext";
import { Outlet } from "react-router-dom";

const App = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      {cartCtx.showCart && <Cart> </Cart>}
      <Header></Header>
      <Title></Title>
      <Outlet></Outlet>
      <Footer> </Footer>
    </div>
  );
};

export default App;
