import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Use NavLink
import image1 from "../images/image13.png";
import "./checkout.css";
import { AuthContext } from "../context";

function Checkout() {
  const navigate = useNavigate();
  const { storeData } = useContext(AuthContext);

  return (
    <div className="checkout">
      {/* Header Section */}
      <img className="faq_img1" src={image1} alt="Checkout" />
      <h1 className="faq_title">Checkout</h1>

      {/* Checkout Steps */}
      <div className="checkout-steps">
        <NavLink 
          to="/cart"
          className={({ isActive }) => (isActive ? "active-link" : "")} // Add active class dynamically
        >
          <p>1</p> Shopping Cart
        </NavLink>

        <NavLink 
          to="/checkout"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <p>2</p> Checkout Details
        </NavLink>

        <NavLink 
          to="/order-complete"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <p>3</p> Order Complete
        </NavLink>
      </div>

      {/* Billing Details */}
      <div className="checkout-content">
        <h1 className="checkout-content-title">Billing Details</h1>

        <div className="checkout-content-nameandfname">
          <input 
            type="text" 
            className="checkout-content-nameandfname-content" 
            placeholder="Enter first name:" 
          />
          <input 
            type="text" 
            className="checkout-content-nameandfname-content" 
            placeholder="Enter last name:" 
          />
        </div>

        <div className="checkout-content2">
          <label htmlFor="company">Company Name (optional)</label>
          <input type="text" id="company" name="company" />

          <label htmlFor="country">Country Name:</label>
          <input type="text" id="country" name="country" />

          <label htmlFor="address">Street Address:</label>
          <input type="text" id="address" name="address" placeholder="House number and street name" />
          <input type="text" id="address2" name="address2" placeholder="Apartment, suite, unit, etc. (optional)" />

          <label htmlFor="postcode">Postcode / ZIP *</label>
          <input type="text" id="postcode" name="postcode" />

          <label htmlFor="phone">Phone *</label>
          <input type="text" id="phone" name="phone" />

          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" />

          <h1 className="checkout-content2-additional">Additional Information</h1>
          <label htmlFor="message">Order Notes (optional)</label>
          <textarea id="message" placeholder="Notes about your order. e.g special notes for delivery"></textarea>
        </div>

        <div className="yourorder">
          <h1 className="yourorder-title">Your Order</h1>
          
          <table className="yourorder_table">
            <tbody>
              <tr>
                <td>Total Items:</td>
                <td>{storeData.length}</td>
              </tr>
              <tr>
                <td>Total Price:</td>
                <td>${storeData.reduce((total, item) => total + item.price, 0).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          <button className="yourrrorder-btn">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
