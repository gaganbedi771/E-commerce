import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },
  ];

  const cartCtx = useContext(CartContext);

  return (
    <div className="cart-sidebar">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className=" m-0">Cart</h1>
        <Button className="btn btn-danger" onClick={cartCtx.toggleCart}>
          X
        </Button>
      </div>

      {cartCtx.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row pb-3 mb-4 fw-bold">
            <div className="col-6">ITEM</div>
            <div className="col-3">PRICE</div>
            <div className="col-3">Quantity</div>
          </div>

          {cartCtx.cart.map((element, index) => (
            <div className="row align-items-center mb-4" key={index}>
              <div className="col-6 d-flex align-items-center gap-3">
                <img
                  src={element.imageUrl}
                  alt={element.title}
                  width="80"
                  className="rounded"
                />

                <span>{element.title}</span>
              </div>

              <div className="col-3">${element.price}</div>

              <div className="col-3">
                <span className="border px-3 py-1">{element.quantity}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
