import React from "react";
import img from "../images/image13.png";
import img1 from "../questionimages/questionimg6.png";

import "./page6blog.css";

function Page6() {
    return (
        <div className="page6">
            <img className="reward_image1" src={img}/>
            <h1 className="page6_title" >What is RentalCover and how does it work?</h1>

            <div className="page6">
                <img className="pageContent_img" src={img1}/>
                <p className="pageContent_opinion">I Think its worth it... Do you Agree?</p>

                <p className="pageContent_parag">RentalCover is a company that provides insurance coverage for rental cars, offering an alternative to expensive policies from traditional rental agencies. It works by allowing travelers to purchase comprehensive protection plans that cover damages, theft, and other unexpected incidents at a lower cost than what rental companies typically charge. Customers can book coverage online before their trip, and in case of an accident or damage, they pay the rental company first and then file a claim with RentalCover for reimbursement. This service helps renters save
                     money while ensuring peace of mind during their journey.</p>


            </div>
        </div>
    );
}

export default Page6;
