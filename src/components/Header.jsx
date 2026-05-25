import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CartContext from "../context/CartContext";
import { Link,NavLink } from 'react-router-dom';


const Header = () => {
  const cartCtx=useContext(CartContext);

  return (
    <Navbar bg="dark" variant='dark' className='py-3 '>
        <Container >
          <Nav className=' gap-5 mx-auto' >
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>

          <Button variant="outline-info " onClick={cartCtx.toggleCart}>

          Cart <span className="ms-2">{cartCtx.cart.length}</span>

        </Button>
      
      </Container>
      
 </Navbar>
  )
}

export default Header