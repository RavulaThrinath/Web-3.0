import React from "react";
import "./Contact.css";
// import styled from 'styled-components';
import emailjs from "emailjs-com";
// import Heart from "react-animated-heart";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qnop8yb",
        "template_kj9cy0i",


        e.target,
        "user_U7ZiZc36EM1CcKPhTxJGu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="formContainer">
     <p> </p>
     <div className="contact-text">Please feel free to drop me a line. I'll get back to you as soon as I can. That's a promise!
     </div>
      
        <form onSubmit={sendEmail} className="formclass">
        <div class="group">      
        <input type="text" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label className="required">Name</label>
      </div>
        
      <div class="group">      
        <input type="email" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label className="required">Email</label>
      </div>
      <div class="group">      
        <input type="text" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label className="required">Message</label>
      </div>
          <button type="submit" className="css-button-3d-sky">Submit</button>
        </form>
       
        
      </div>
    </div>
  );
};

export default Contact;


// <Heart isClick={isClick} onClick={() => setClick(!isClick)} />

// const [isClick, setClick] = useState(false);
// const [count, setCount] = useState(10);