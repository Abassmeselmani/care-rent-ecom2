import React from "react";
import img from "../images/image13.png";
import img1 from "../questionimages/questionimg3.png";



import './page3blog.css';




function Page3(){
    return(
        <div className="page3">
            <img className="reward_image1" src={img}/>
            <h1 className="page3_title">How to rent a car</h1>

            <div className="page3content">
                <img className="pageContent_img" src={img1}/>
                <p className="pageContent_opinion">I Think its worth it... Do you Agree?</p>

                <p className="pageContent_parag">Renting a car is a simple process that involves a few key steps. First, choose a reputable car rental company and compare prices, vehicle options, and rental terms. Next, make a reservation online or at the rental office, providing necessary documents such as a valid driver’s license, identification, and a credit or debit card for payment. Before driving away, inspect the car for any existing damages and ensure it meets your needs. Finally, return the car on time with the agreed fuel level to avoid extra charges. Always read the rental agreement carefully to
                     understand insurance coverage and additional fees.</p>

            </div>
            
        </div>
    )
    
}

export default Page3;