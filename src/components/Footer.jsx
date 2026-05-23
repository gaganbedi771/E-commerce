import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="bg-info text-white py-4 mt-5">
      <Container className="d-flex justify-content-between align-items-center">
        <h2 className="m-0">The Generics</h2>

        <div className="d-flex gap-4">
         

         <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt="Facebook"
            width="30"
            
          />

           <img
            src="https://cdn-icons-png.flaticon.com/512/174/174872.png"
            alt="Spotify"
            width="30"
          />

              <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            width="30"
          />

          
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
