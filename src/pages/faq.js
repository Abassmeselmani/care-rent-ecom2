import React from "react";
import image1 from "../images/image13.png";
import image2 from "../images/image16.png";
import { useState } from "react";
function FAQ(){

    const[activeparagraph  , setactiveparagraph] = useState(null);

    
    return(
        <div className="faq">
            <img src={image1} className="faq_img1"/>
            <h1 className="faq_title">FAQ</h1>

            <img className="faq_img2" src={image2}/>
            <div className="faq_part1">
                <h1 className="faq_part1-title">Do you have any <span>Questions?</span> </h1>
                <p className="faq_part1-descript">Please read questions below and if you can not find your answer, please send us 
                    your question, we will answer you as soon as possible.</p>

                <p className="faq_part1-logo">F.A.Qs</p>


            </div>

            <div className="faq_mcq">
                <div>
                <h1   onClick={() => setactiveparagraph(activeparagraph === 0 ? null : 0)}
  className={activeparagraph === 0 ? "active" : ""}>How to rent a Car?</h1>
                <p className={activeparagraph === 0 ? "active" : "hidden"}>
                To rent a car, choose a rental company, provide a valid driver’s license and payment method, and 
                select a vehicle. Review the rental agreement, check the car for damage, 
                and return it on time to avoid extra charges.</p></div>

                <div>
                    <h1   onClick={() => setactiveparagraph(activeparagraph === 1 ? null : 1)}
  className={activeparagraph === 1 ? "active" : ""}>How do I return my rental car at the airport?</h1>
                    <p className={activeparagraph === 1 ? "active" : "hidden"}>To return your rental car at the airport, follow the signs to the rental car return area, park in the designated spot, and remove all your belongings.
                         Check the car for damage, return the keys to the rental desk, and confirm 
                         the return with the staff.</p>
                </div>

                <div>
                    <h1   onClick={() => setactiveparagraph(activeparagraph === 2 ? null : 2)}
  className={activeparagraph === 2 ? "active" : ""}>What is Rental Cover and how does it work?</h1>
                    <p className={activeparagraph === 2 ? "active" : "hidden"}>Rental Cover is an insurance option that protects you from high costs if your rental car is damaged or stolen. It works by reimbursing you for expenses like repair fees or excess charges,
                         often at a lower cost than buying coverage directly 
                         from the rental company.</p>
                </div>

                <div>
                    <h1   onClick={() => setactiveparagraph(activeparagraph === 3 ? null : 3)}
  className={activeparagraph === 3 ? "active" : ""}>What documents are needed to rent a car?</h1>
                    <p className={activeparagraph === 3 ? "active" : "hidden"}>A valid driver’s license, a credit or
                         debit card, and sometimes an additional ID, like a passport, are required to rent a car.</p>
                </div>

                <div>
                    <h1   onClick={() => setactiveparagraph(activeparagraph === 4 ? null : 4)}
  className={activeparagraph === 4 ? "active" : ""}>Is there an age limit for renting a car?</h1>
                    <p className={activeparagraph === 4 ? "active" : "hidden"}>Most rental companies
                         require drivers to be at least 21 years old, and additional fees may apply for drivers under 25.</p>
                </div>

                <div>
                    <h1   onClick={() => setactiveparagraph(activeparagraph === 5 ? null : 5)}
  className={activeparagraph === 5 ? "active" : ""}>What happens if the rental car is returned late?</h1>
                    <p className={activeparagraph === 5 ? "active" : "hidden"}>Returning a car late
                         may result in extra charges, usually calculated as an additional 
                         day's rental fee or an hourly rate.</p>
                </div>

            </div>

        </div>
        
    )
}

export default FAQ;