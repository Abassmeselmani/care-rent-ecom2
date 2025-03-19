import React from "react";
import img from "../images/image13.png";
import img1 from "../questionimages/questionimg4.png";


import './page4blog.css';


function Page4(){
    return(
        <div className="page4">
            <img className="reward_image1"  src={img}/>
            <h1 className="page4_title">Pick up at the airport or the city? </h1>

            <div className="page4content">
                <img className="pageContent_img" src={img1}/>
                <p className="pageContent_opinion">I Think its worth it... Do you Agree?</p>
                <p className="pageContent_parag">When renting a car, you can choose to pick it up at the airport or in the city, each option having its pros and cons. Picking up a car at the airport is convenient, especially after a long flight, saving time and hassle with immediate access to transportation. However, airport rentals often come with higher fees and taxes. On the other hand, renting from a city location can be more affordable, with a wider selection of vehicles and fewer additional charges. If you don’t need a car immediately upon arrival, opting for a city pickup could save
                     money while still offering flexibility during your trip.</p>


            </div>



        </div>
    )
}

export default Page4;