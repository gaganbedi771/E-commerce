import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      email,
      message,
    };
    uploadData(contactData);
    setName("");
    setEmail("");
    setMessage("");
  };

  const uploadData = async (data) => {
    try {
      const response = await fetch(
        "https://react-http-c4f8c-default-rtdb.firebaseio.com/contactData.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Enter your details below and we will contact you shortly! </h2>
      <div className="formDiv">
        <form onSubmit={submitHandler} className="contactForm">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="submitContactUsButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
