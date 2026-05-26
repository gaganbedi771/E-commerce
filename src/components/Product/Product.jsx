import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const Store = () => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const cartCtx = useContext(CartContext);

  return (
    <Container>
      <h2 className="text-center m-5">Music</h2>
      <Row>
        {productsArr.map((product) => {
          return (
              <Col className=" mb-5" key={product.id}>
            <Link to={`/store/${product.id}`}>

                <div className="d-flex flex-column align-items-center">
                  <h4 className="text-center">{product.title}</h4>
                  <img src={product.imageUrl} alt={product.title}></img>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3 px-3">
                  <p>${product.price} </p>
                  <Button
                    onClick={() => {
                      cartCtx.addToCart({ ...product, quantity: 1 });
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
            </Link>

              </Col>
          );
        })}
      </Row>

      <div className="text-center mt-4">
        <Button variant="info">See the Cart</Button>
      </div>
    </Container>
  );
};

export default Store;
