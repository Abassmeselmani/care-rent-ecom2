// src/pages/Contact.js
import image1 from "../images/contact.png";
import image2 from "../images/redcamaro.png";
import React from 'react';
import "./contact.css";
import emailjs from "@emailjs/browser";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault(); 

    emailjs.sendForm(
      "service_r0ffdkf",      
      "template_ux6h0cq",   
      e.target,              
      "2vjp4j3WRDcx3MJEI" 
    )
    .then((result) => {
      alert("Message sent successfully! ✅");
      console.log("Success:", result.text);
    })
    .catch((error) => {
      alert("Failed to send message ❌");
      console.error("Error:", error.text);
    });

    e.target.reset(); 
  };

  return (
    <div className="contact">
      <img src={image1} className="contact_image" alt="Contact" />
      <img src={image2} className="contact_image2" alt="Red Camaro" />

      <div className="contact_bef">
        <p className="contact_bef-title">Contact us Today</p>
        <h1 className="contact_bef-descript">Get in touch with us and ask your <span>questions!</span></h1>
      </div>

      <form className="contact_form" onSubmit={handleSubmit}>
        <div className="contact_form-row">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="contact_form-name" placeholder="Your Name(*)" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="contact_form-email" placeholder="Your Email(*)" required />
          </div>
        </div>

        <div className="contact_form-department-row">
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" className="contact_form-phone" placeholder="Phone" />
          </div>
          <div>
            <label htmlFor="department">Department:</label>
            <select id="department" name="department" className="contact_form-department" required>
              <option value="" disabled selected>Select Department</option>
              <option value="business">Business Department</option>
              <option value="personal">Personal Department</option>
              <option value="support">Support Department</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        <label htmlFor="message">Your Question:</label>
        <textarea id="message" rows="5" cols="40" name="message" className="contact_form-message" placeholder="Your Message..." required></textarea>

        <button type="submit" className="contact_form-submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
