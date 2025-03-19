import React from "react";
import img from "../images/image13.png";
import img1 from "../questionimages/questionimg5.png";



import './page5blog.css';

function Page5(){
    return(
        <div className="page5">
            <img className="reward_image1" src={img}/>
            <h1 className="page5_title">How do I return my rental car at the airport?</h1>
            
            <div className="page5content">
                <img className="pageContent_img"  src={img1}/>
                <p className="pageContent_opinion">I Think its worth it... Do you Agree?</p>
                <p className="pageContent_parag">Returning a rental car at the airport is a straightforward process, but it’s important to follow the right steps to avoid extra charges. First, check your rental agreement for the return location and any specific instructions. Follow the airport signs directing you to the car rental return area, usually located near the terminal or in a designated parking lot. Before handing over the keys, remove all personal belongings, ensure the fuel level meets the rental company's requirements, and inspect the car for any damage. Finally, return the keys to the rental desk or drop them in the designated box if returning outside business hours.
                     Keep a copy of the return receipt for your records.</p>


            </div>

        </div>
    );
}

export default Page5;