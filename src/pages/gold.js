import React from "react";
import image3 from "../images/image13.png";
import image4 from "../images/image7.png";
import image2 from "../images/image2.png";
import logo1 from "../logos/logo1.png";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.png";
import logo4 from "../logos/logo4.png";
import logo5 from "../logos/logo5.png";
import { useNavigate } from "react-router-dom";
import './gold.css';


function Gold() {

  const navigate = useNavigate();
  return (
    <div className="reward">
      <img className="reward_image1" src={image3} alt="Reward Image" />
      <h1 className="reward_title">Gold Rewards</h1>
      <div className="reward_part1">
        <p className="reward_part1-title">Car rental benefits with XTRA</p>
        <h1 className="reward_part1-descript">
          Complimentary <span>Status and Bonus </span> Miles with XTRA Cars
        </h1>
      </div>
      <div className="x5_bmw">
        <img className="reward_bmw" src={image4} alt="BMW" />
      </div>

      <div className="containers">
        {/* Silver Container */}
        <div className="containers_silver">
          <h1 className="containers_silver-title">Silver</h1>
          <div className="containers_silver-price">19.99</div>
          <ul className="containers_silver-list">
            <li>Consolidated rental car facility</li>
            <li>Carsharing</li>
            <li>Damage waiver</li>
            <li>European Tourism Manifesto</li>
            <li>Ecotax</li>
            <li>Traffic congestion</li>
            <li>Peer-to-peer carsharing</li>
            <li>Vehicle leasing</li>
            <li>Personal public transport</li>
          </ul>
          <button onClick={() => navigate("/rent")} className="containers_silver-btn">Order Now</button>
        </div>

        {/* Gold Container */}
        <div className="containers_silver">
          <h1 className="containers_silver-title">Gold</h1>
          <div className="containers_silver-price">29.99</div>
          <ul className="containers_silver-list">
            <li>Consolidated rental car facility</li>
            <li>Carsharing</li>
            <li>Damage waiver</li>
            <li>European Tourism Manifesto</li>
            <li>Ecotax</li>
            <li>Traffic congestion</li>
            <li>Peer-to-peer carsharing</li>
            <li>Vehicle leasing</li>
            <li>Tourist Tax</li>
            <li>Personal public transport</li>
          </ul>
          <button onClick={() => navigate("/rent")} className="containers_silver-btn">Order Now</button>
        </div>

        {/* Diamond Container */}
        <div className="containers_silver">
          <h1 className="containers_silver-title">Diamond</h1>
          <div className="containers_silver-price">39.99</div>
          <ul className="containers_silver-list">
            <li>Consolidated rental car facility</li>
            <li>Carsharing</li>
            <li>Damage waiver</li>
            <li>European Tourism Manifesto</li>
            <li>Ecotax</li>
            <li>Traffic congestion</li>
            <li>Peer-to-peer carsharing</li>
            <li>Vehicle leasing</li>
            <li>Personal public transport</li>
          </ul>
          <button onClick={() => navigate("/rent")} className="containers_silver-btn">Order Now</button>
        </div>
      </div>
      <div className="rover">
        <img className="rover_img" src={image2} alt="Rover" />

        </div>

        <div className="logo">
            <p className="logo_title">Best modern car with Xtra</p>
            <h1 className="logo_descript">Our Famous <span>Partners</span></h1>
            <div className="logo-logos">
                <img src={logo1}/>
                <img src={logo2}/>
                <img src={logo3}/>
                <img src={logo4}/>
                <img src={logo5}/>


            </div>


        </div>




       


      
    </div>
  );
}

export default Gold;
