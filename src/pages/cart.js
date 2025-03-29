import React, { useContext } from "react";
import image1 from "../images/image13.png";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./cart.css";

function Cart() {
  const { user, storeData, removeFromCart } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="login-message">
        <h1>You need to log in to view the cart.</h1>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="cart">
      <img className="faq_img1" src={image1} alt="Cart Header" />
      <h1 className="faq_title">Cart</h1>

      {/* Conditionally render checkout steps */}
      {storeData.length > 0 && (
        <div className="checkout-steps">
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active-link" : "")}
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
      )}

      {storeData.length > 0 ? (
        <>
          <table className="cart_table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {storeData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.imageURL}
                      alt={item.name}
                      className="cart_item-image"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td onClick={() => removeFromCart(item.id)} className="remove-btn">
                    ❌
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={() => navigate("/rent")} className="Cart_btn">
            Continue Shopping...
          </button>

          <div className="total">
            <h1 className="total_title">Cart Totals</h1>
            <table className="total_table">
              <tbody>
                <tr>
                  <td>Total Items:</td>
                  <td>{storeData.length}</td>
                </tr>
                <tr>
                  <td>Subtotal:</td>
                  <td>${storeData.reduce((total, item) => total + item.price, 0).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Total:</td>
                  <td>${storeData.reduce((total, item) => total + item.price, 0).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={() => navigate("/checkout")} className="total_btn">
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <p className="cart_empty">Your cart is empty.</p>
          <FontAwesomeIcon className="empty-icon" icon={faCartShopping} size="2x" />
        </div>
      )}
    </div>
  );
}

export default Cart;
