import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./context/CartProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Product from "./components/Product/Product.jsx";

import ContactUs from "./components/ContactUs/ContactUs.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import Login from "./components/Login/Login.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

const About=lazy(()=>import ("./components/About/About.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <App></App>
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/store",
        element: <Product></Product>,
      },

      {
        path: "/about",
        element: <Suspense fallback={<p>Loading...</p>}><About></About></Suspense>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/store/:id",
        element: <ProductDetail></ProductDetail>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </AuthContextProvider>,
);
