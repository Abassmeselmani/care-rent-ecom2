import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/image13.png";
import "./checkout.css";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const navigate = useNavigate();
  

  return (
    <div className="checkout">
      <img className="faq_img1" src={image1} alt="Checkout" />
      <h1 className="faq_title">Checkout</h1>

      <div className="checkout-steps">
        <Link to="/cart" onClick={() => navigate("/cart")}>
          <p>1</p> Shopping Cart
        </Link>

        <Link to="/checkout" onClick={() => navigate("/checkout")}>
          <p>2</p> Checkout Details
        </Link>

        <Link to="/order-complete" onClick={() => navigate("/order-complete")}>
          <p>3</p> Order Complete
        </Link>
      </div>


      <div className="checkout-content">
        <h1 className="checkout-content-title">Billing Details</h1>



      </div>
    </div>
  );
}

export default Checkout;
