import React from "react";
import image1 from "../images/image13.png";
import image2 from "../images/image16.png";
function FAQ(){
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

        </div>
        
    )
}

export default FAQ;