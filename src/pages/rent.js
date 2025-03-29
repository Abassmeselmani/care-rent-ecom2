import React, { useContext, useState } from "react";
import image3 from "../images/image13.png";
import rent from "../rental";
import { AuthContext } from "../context";
import "./rent.css";
import { useNavigate } from "react-router-dom";

function Rent() {

  const navigate = useNavigate();
  const { addToCart, user } = useContext(AuthContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAddedModal, setShowAddedModal] = useState(false);

  const handleAddToCart = (item) => {
    if (!user) {
      setShowLoginModal(true); // Show login modal if user is not logged in
      return;
    }
    addToCart(item);  
    setShowAddedModal(true); // Show item added modal
    setTimeout(() => setShowAddedModal(false), 2000); // Auto close after 2 seconds
  };

  return (
    <div className="rent">
      <img className="rent_image1" src={image3} alt="Rent Header" />
      <h1 className="rent_title">Rent</h1>
      <div className="collection">
        {rent.map((item) => (
          <div className="collection_item" key={item.id}>
            <img className="collection_images" src={item.imageURL} alt={item.name} />
            <span className="collection_name">{item.name}</span>
            <div className="collection_price">
              {item.price}
              <span className="collection-price_slash">{item.wasprice}</span>
            </div>
            <button 
              onClick={() => handleAddToCart(item)} 
              className="collection_btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Login Required */}
      {showLoginModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">⚠️ Login Required</h2>
            <p className="modal-message">You need to log in to add items to the cart.</p>
            <button className="modal-close-btn" onClick={() => setShowLoginModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for Item Added Confirmation */}
      {showAddedModal && (
  <div className="added-modal-overlay">
    <div className="added-modal-content">
      <h2 className="added-modal-title">✅ Item Added</h2>
      <p className="added-modal-message">The item was successfully added to your cart.</p>
      <button onClick={() => navigate("/cart")} className="added-close-btn">View in Cart</button>
    </div>
  </div>
)}

    </div>
  );
}

export default Rent;
