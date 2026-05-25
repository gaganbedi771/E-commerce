import React from "react";
import Button from "react-bootstrap/Button";

const Home = () => {
  const tours = [
    "JUL 16 | Detroit, MI | DTE ENERGY MUSIC THEATRE",
    "JUL 19 | Toronto, ON | BUDWEISER STAGE",
    "JUL 22 | Bristol, VA | JIGGY LUBE LIVE",
    "JUL 29 | Phoenix, AZ | AK-CHIN PAVILION",
    "AUG 2 | Las Vegas, NV | T-MOBILE ARENA",
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Tours</h2>
      <ul className="list-group mx-auto w-75">
        {tours.map((tour, index) => {
         return  <li key={index} className="list-group-item d-flex justify-content-between align-items-center" >
            <span>{tour}</span>

            <Button variant="info">Buy Tickets</Button>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
