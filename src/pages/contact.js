// src/pages/Contact.js
import image1 from "../images/contact.png"
import image2 from "../images/redcamaro.png"
import React from 'react';

import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <img src={image1} className="contact_image" />
      <img src={image2} className="contact_image2" />

      <div className="contact_bef">
        <p className="contact_bef-title">Contact us Today</p>
        <h1 className="contact_bef-descript">Get in touch with us and ask your <span>questions!</span></h1>
      </div>

      <div className="contact_form">
        <div className="contact_form-row">
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" className="contact_form-name" placeholder="Your Name(*)" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" className="contact_form-email" placeholder="Your Email(*)" required />
          </div>
        </div>

        <div className="contact_form-department-row">
          <div>
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" className="contact_form-phone" placeholder="Phone" />
          </div>
          <div>
            <label for="department">Department:</label>
            <select id="department" name="department" className="contact_form-department" required>
              <option value="" disabled selected>Select Department</option>
              <option value="business">Business Department</option>
              <option value="personal">Personal Department</option>
              <option value="support">Support Department</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        <label for="message">Your Question:</label>
        <textarea id="message" rows="5" cols="40" name="message" className="contact_form-message" placeholder="Your Message..." required></textarea>

        <button type="submit" className="contact_form-submit">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
