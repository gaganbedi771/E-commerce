import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' className='py-3 '>
        <Container className="justify-content-center">
          <Nav className='gap-5'>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Store</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>
      
      </Container>
      
 </Navbar>
  )
}

export default Header