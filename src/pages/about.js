import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import image3 from "../images/image13.png";
import image1 from "../images/image14.png";
import style1 from "../images/stylee.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import image4 from "../images/image12.png";
import image5 from "../images/image7.png";
import image6 from "../images/image8.png";
import style2 from "../images/wave1.png";
import style3 from "../images/wave2.png";
import image7 from "../images/image15.png";

import './about.css';




function About() {
  // State variables
  const [happyClients, setHappyClients] = useState(0);
  const [yearsofexp, setYearsOfExp] = useState(0);
  const [expertMember, setExpertMember] = useState(0);
  const [awardWinner, setAwardWinner] = useState(0);
  const [activeParagraph, setActiveParagraph] = useState(0);
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const [activeimage, setActiveimage] = useState(0);
  const [rentingvans, setrentingvans] = useState(0);
  const [rentingtruck, setrentingtruck] = useState(0);
  const [rentingtcar, setrentingcar] = useState(0);
  const [rentingcustom, setrentingcustom] = useState(0);
  

  


  // Handle path selection
  const handleSelect = (path) => {
    setSelected(path);
  };

  useEffect(() =>{
    let i=0;
    const interval = setInterval(() =>{
      setrentingvans((prev) => prev + 1);
      i++;
      if(i>76){
        clearInterval(interval);
      }
    } , 76);
  } , []);
  useEffect(() =>{
    let i=0;
    const interval = setInterval(() =>{
      setrentingtruck((prev) => prev + 1);
      i++;
      if(i>91){
        clearInterval(interval);
      }
    } , 91);
  } , []);

  useEffect(() =>{
    let i=0;
    const interval = setInterval(() =>{
      setrentingcar((prev) => prev + 1);
      i++;
      if(i>85){
        clearInterval(interval);
      }
    } , 85);
  } , []);

  
  useEffect(() =>{
    let i=0;
    const interval = setInterval(() =>{
      setrentingcustom((prev) => prev + 1);
      i++;
      if(i>93){
        clearInterval(interval);
      }
    } , 93);
  } , []);

  // Award Winner Animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setAwardWinner((prev) => prev + 1);
      i++;
      if (i > 77) {
        clearInterval(interval);
      }
    }, 77);
  }, []);

  // Happy Clients Animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setHappyClients((prev) => prev + 1);
      i++;
      if (i > 98) {
        clearInterval(interval);
      }
    }, 98);
  }, []);

  // Expert Members Animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setExpertMember((prev) => prev + 1);
      i++;
      if (i > 95) {
        clearInterval(interval);
      }
    }, 95);
  }, []);

  // Years of Experience Animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setYearsOfExp((prev) => prev + 1);
      i++;
      if (i > 27) {
        clearInterval(interval);
      }
    }, 27);
  }, []);

  return (
    <div className="about">
      {/* Reward Image */}
      <img className="reward_image1" src={image3} alt="Image 3" />

      {/* Title Section */}
      <h1 className="about_title">About</h1>

      {/* Automobile Section */}
      <div className="about_automobile">
        <div className="image-container2">
          <img className="about_automobile-img" src={image1} alt="Automobile" />
        </div>
        <p className="about-rent">
          ABOUT OUR <span>CAR RENT</span>
        </p>
        <div className="about_automobile-part2">
          <p className="about_automobile-paragraph">
            A car rental, hire car, or car hire agency is a company that rents
            automobiles for short periods of time to the public, generally
            ranging from a few hours to a few weeks. It is often organized with
            numerous local branches (which allow a user to return a vehicle to a
            different location), and primarily located near airports or busy city
            areas and often complemented by a website allowing online
            reservations.
          </p>
          <ul className="about_automobile-list">
            <li>
              <FontAwesomeIcon icon={faCar} className="car-icon" />
              Limited liability for shareholders.
            </li>
            <li>
              <FontAwesomeIcon icon={faCar} className="car-icon" />
              Able to raise significant capital.
            </li>
            <li>
              <FontAwesomeIcon icon={faCar} className="car-icon" />
              Easy to sell and pass ownership.
            </li>
            <li>
              <FontAwesomeIcon icon={faCar} className="car-icon" />
              Well understood and accepted.
            </li>
            <li>
              <FontAwesomeIcon icon={faCar} className="car-icon" />
              Offset against future profits.
            </li>
            <li>
              <FontAwesomeIcon icon={faCar} className="car-icon" />
              Profits can be reinvested & paid.
            </li>
          </ul>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="carStat">
        <img className="carStat_img" src={style1} alt="Car Statistics" />
        <div className="carStat_info">
          <p className="carStat_title">Car rental expert stats</p>
          <h1 className="carStat_descript">
            We are an expert team. Our stats also are <span>expert</span>.
          </h1>
        </div>
        <div className="statistics">
          <div className="statistics_item">
            <div className="statistics_num">{happyClients}K</div>
            <p className="statistics_title">Happy Clients</p>
          </div>
          <div className="statistics_item">
            <div className="statistics_num">{yearsofexp}+</div>
            <p className="statistics_title">Years of Experience</p>
          </div>
          <div className="statistics_item">
            <div className="statistics_num">{expertMember}+</div>
            <p className="statistics_title">Expert Members</p>
          </div>
          <div className="statistics_item">
            <div className="statistics_num">{awardWinner}+</div>
            <p className="statistics_title">Awards Winner</p>
          </div>
        </div>

        {/* Belief Section */}
        <div className="beleive">
          <h1 className="beleive_title">
            We believe we are professional <span>Car Rental</span>
          </h1>
          <div className="beleive_links">
            <Link
              onClick={() => {
                handleSelect("/about");
                setActiveParagraph(0);
              }}
            >
              Car Rental
            </Link>
            <Link
              onClick={() => {
                handleSelect("/about");
                setActiveParagraph(1);
              }}
            >
              Drivers
            </Link>
            <Link
              onClick={() => {
                handleSelect("/about");
                setActiveParagraph(2);
              }}
            >
              Buy/Sell
            </Link>
            <Link
              onClick={() => {
                handleSelect("/about");
                setActiveParagraph(3);
              }}
            >
              Agreements
            </Link>
          </div>
          <p className={activeParagraph === 0 ? "active" : "hidden"}>
            We invest in local solutions to the local water crisis in sub-Saharan
            Africa. We provide clean water. In order to help the communities we
            have created a group of farmers who donate agricultural products to
            food banks.
          </p>
          <p className={activeParagraph === 1 ? "active" : "hidden"}>
            If you haven't any charity in your heart, You have the worst kind of
            heart trouble. Good actions give strength to ourselves and inspire good
            actions in others.
          </p>
          <p className={activeParagraph === 2 ? "active" : "hidden"}>
            The way you get meaning into your life is to devote yourself to loving
            others, devote yourself to your community around you, and devote
            yourself to creating something that gives you purpose and meaning.
            Happiness is not something ready made. It comes from your own actions!
          </p>
          <p className={activeParagraph === 3 ? "active" : "hidden"}>
            The way you get meaning into your life is to devote yourself to loving
            others, devote yourself to your community around you, and devote
            yourself to creating something that gives you purpose and meaning.
            Happiness is not something ready made. It comes from your own actions!
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="believe_images">
        {/* Images */}
        <img
          className={activeimage === 0 ? "active" : "hidden"}
          onClick={() => setActiveimage(0)}
          src={image4}
          alt="Image 4"
        />
        <img
          className={activeimage === 1 ? "active" : "hidden"}
          onClick={() => setActiveimage(1)}
          src={image5}
          alt="Image 5"
        />
        <img
          className={activeimage === 2 ? "active" : "hidden"}
          onClick={() => setActiveimage(2)}
          src={image6}
          alt="Image 6"
        />

        {/* Circles for switching images */}
        <div className="image-selector">
          <span
            className={activeimage === 0 ? "circle active" : "circle"}
            onClick={() => setActiveimage(0)}
          ></span>
          <span
            className={activeimage === 1 ? "circle active" : "circle"}
            onClick={() => setActiveimage(1)}
          ></span>
          <span
            className={activeimage === 2 ? "circle active" : "circle"}
            onClick={() => setActiveimage(2)}
          ></span>
        </div>
      </div>
      <div className="chooseUs">
        <img className="chooseUs-wave1" src={style2}/>
        <img className="chooseUs-wave2" src={style3}/>
        <img className="chooseUs-img1" src={image7}/>
        <h1 className="chooseUs-title">Why you <span>Choose Us?</span></h1>
        <p className="chooseUs-descript">Business services is a general term that describes work that supports a 
            business but does not produce a tangible. </p>
            <div className="chooseUs_ranges">
                <p className="chooseUs_ranges--name">Renting vans</p>

                <label for="rangeInput"></label>
                <input type="range" className="rangeinput" id="rangeInput" min="0" max="100" value={rentingvans} step="1"/>
                <span id="rangeValue" class="value-display">{rentingvans}%</span>

                <p className="chooseUs_ranges--name" >Renting trucks</p>
                <label for="rangeInput"></label>
                <input className="rangeinput" type="range" id="rangeInput" min="0" max="100" value={rentingtruck} step="1"/>
                <span id="rangeValue" class="value-display">{rentingtruck}%</span>

                <p className="chooseUs_ranges--name">Hire car</p>
                <label for="rangeInput"></label>
                <input className="rangeinput" type="range" id="rangeInput" min="0" max="100" value={rentingtcar} step="1"/>
                <span id="rangeValue" class="value-display">{rentingtcar}%</span>


                <p className="chooseUs_ranges--name">Customers Rating</p>
                <label for="rangeInput"></label>
                <input className="rangeinput" type="range" id="rangeInput" min="0" max="100" value={rentingcustom} step="1"/>
                <span id="rangeValue" class="value-display">{rentingcustom}%</span>

                







            </div>

      </div>
    </div>
  );
}

export default About;
