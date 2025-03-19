import React from "react";
import img1 from "../questionimages/questionimg2.png";
import img from "../images/image13.png";

import './page2blog.css';

function Page2(){
    return(
        <div>
            <img className="reward_image1" src={img}/>
            <h1 className="page2_title" >Why you should rent a car</h1>

            <div className="page2content">
                <img className="pageContent_img"  src={img1}/>
                <p className="pageContent_opinion">I Think its worth it... Do you Agree?</p>

                <p className="pageContent_parag">Renting a car offers flexibility, convenience, and cost savings, especially when traveling or needing a temporary vehicle. It allows you to choose a car that suits your specific needs without the long-term commitment of ownership. Whether you're on vacation, a business trip, or your own car is under repair, renting provides a hassle-free solution with no maintenance worries. Additionally, rental cars give access to the latest models with modern features, ensuring 
                    a comfortable and reliable driving experience.</p>

            </div>

            
        </div>

    )
}

export default Page2;