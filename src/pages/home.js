import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/image.png"; // Ensure this path is correct
import image2 from "../images/image2.png";
import image3 from "../images/image7.png";
import image4 from "../images/image8.png"; // Ensure trust data is properly imported
import image5 from "../images/image12.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { trust } from "../trust";
import { type } from "../types";

function Home() {
  const navigate = useNavigate();
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);

  // Navigation Handlers
  const handleClick = () => navigate("/gold");
  const handlerent = () => navigate("/rent");

  // Type Navigation Handlers
  const handleNextType = () => {
    setCurrentTypeIndex((prevIndex) => (prevIndex + 1) % type.length);
  };
  const handlePrevType = () => {
    setCurrentTypeIndex((prevIndex) => (prevIndex - 1 + type.length) % type.length);
  };

  return (
    <div className="home">
      {/* Description Section */}
      <div className="descriptt">
        <p className="home__title">The best way of Renting</p>
        <h1 className="home__descript">
          Best Cars to make our <span>drive easy</span>
        </h1>
      </div>

      {/* Main Image Section */}
      <div className="image-container">
        <img className="home_image" src={image} alt="Home" />
      </div>

      {/* Wave Divider */}
      <div className="custom-shape-divider-bottom-1731958221">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" data-name="Layer 1">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* Second Image */}
      <img className="home__image2" src={image2} alt="Home Image 2" />

      {/* Info Section */}
      <div className="home__info">
        <h1>
          We compare car rental, <span>prices!</span>
        </h1>
      </div>

      {/* Trust Section */}
      <div className="trust">
        {trust.map((item) => (
          <div key={item.id} className="trust-item">
            <img className="trust-item__image" src={item.imageURL} alt={item.description || "Trust"} />
            <p className="trust-item__description">{item.description}</p>
          </div>
        ))}
      </div>

      {/* BMW Section */}
      <div className="Bmw">
        <img className="home__bmw" src={image3} alt="BMW" />
      </div>

      {/* Offer Section */}
      <div className="offer">
        <p className="offer_title">Why are our prices lower?</p>
        <h1 className="offer__h1">
          Find the perfect rental car for <span>your trip</span>
        </h1>
        <p className="offer__descript">
          Car Rental is a leader in online car rental reservations; we compare car rental deals from many companies so that
          you can choose which is best for your trip.
        </p>
        <button onClick={handleClick} className="offer__btn">
          Check out cars
        </button>
      </div>

      {/* Weekly Offer Section */}
      <div className="weekoffer">
        <h1 className="weekoffer_title">Weekly Pro Offer</h1>
        <div className="weekoffer_list">
          {[
            "1+ Day free car",
            "1+ Day free driver",
            "20% Cash back",
            "Unlimited mileage",
            "Lowest deposit",
            "Brand new vehicles",
            "Free cancellation",
            "Premium support",
          ].map((item, index) => (
            <div key={index} className="weekoffer_item">
              <span className="checkmark"></span> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Daily Rent Section */}
      <div className="Dailyrent">
        <h1 className="Dailyrent__title">Daily car rent</h1>
        <p>No free offers</p>
        <p>No free driver</p>
        <p>5% Cash back</p>
        <p>1000 mileage</p>
        <p>Default deposit</p>
        <p>Brand new vehicles</p>
        <p>Free cancellation</p>
      </div>

      {/* Mercedes Section */}
      <div className="mercedes">
        <img className="mercedes__image4" src={image4} alt="Mercedes" />
      </div>

      {/* Provides Section */}
      <div className="provides">
        <p className="provide__title">Car rental and much more</p>
        <h1 className="provide__h1">
          CarRental provides more than just a traditional <span className="provide_span">car rental</span>
        </h1>
        <div className="type">
          <div className="type-item">
            <img
              className="type-image"
              src={type[currentTypeIndex].imageURL}
              alt={type[currentTypeIndex].name}
            />
            <h1 className="type-title">{type[currentTypeIndex].name}</h1>
            <p className="type-descript">{type[currentTypeIndex].description}</p>
          </div>
        </div>
        <button onClick={handleNextType} className="next-type-btn">
          &gt;
        </button>
        <button onClick={handlePrevType} className="prev-type-btn">
          &lt;
        </button>
        <button onClick={handlerent} className="availabebtn">
          View all available vehicles
        </button>
      </div>

      {/* Maybach Section */}
      <div className="mayback">
        <img className="mayback_img" src={image5} alt="Maybach" />
      </div>

      {/* Contact Section */}
      <div className="contact">
        <p className="contact_par">
          <FontAwesomeIcon icon={faEnvelope} className="message-icon" /> Need a Car? Contact us now at{" "}
          <a href="tel:+96181031286">+961-81/031286</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
