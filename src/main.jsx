import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./context/CartProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Store from "./components/Store/Store.jsx";
import About from "./components/About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/store",
        element: <Store></Store>,
      },

      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router}></RouterProvider>
  </CartProvider>,
);
