import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CartContext from "../context/CartContext";
import { Link } from 'react-router-dom';


const Header = () => {
  const cartCtx=useContext(CartContext);

  return (
    <Navbar bg="dark" variant='dark' className='py-3 '>
        <Container >
          <Nav className=' gap-5 mx-auto' >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/store">Store</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>

          <Button variant="outline-info " onClick={cartCtx.toggleCart}>

          Cart <span className="ms-2">{cartCtx.cart.length}</span>

        </Button>
      
      </Container>
      
 </Navbar>
  )
}

export default Header