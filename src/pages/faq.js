import React, { useState } from "react";
import image1 from "../images/image13.png";
import image2 from "../images/image16.png";
import emailjs from "@emailjs/browser";
import './faq.css';

function FAQ() {
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        emailjs.sendForm(
            "service_r0ffdkf",      // Your service ID
            "template_ux6h0cq",     // Your template ID
            e.target,               
            "2vjp4j3WRDcx3MJEI"    
        )
        .then((result) => {
            alert("Message sent successfully! ✅");
            console.log("Success:", result.text);
        })
        .catch((error) => {
            alert("Failed to send message ❌");
            console.error("Error:", error.text);
        });

        e.target.reset(); 
    };

    const [activeParagraph, setActiveParagraph] = useState(null);

    return (
        <div className="faq">
            <img src={image1} className="faq_img1" alt="Image 1" />
            <h1 className="faq_title">FAQ</h1>
            <img className="faq_img2" src={image2} alt="Image 2" />

            <div className="faq_part1">
                <h1 className="faq_part1-title">Do you have any <span>Questions?</span> </h1>
                <p className="faq_part1-descript">
                    Please read questions below and if you cannot find your answer, 
                    please send us your question, and we will answer you as soon as possible.
                </p>
                <p className="faq_part1-logo">F.A.Qs</p>
            </div>

            <div className="faq_mcq">
                <div>
                    <h1 onClick={() => setActiveParagraph(activeParagraph === 0 ? null : 0)} 
                        className={activeParagraph === 0 ? "active" : ""}>
                        How to rent a Car?
                    </h1>
                    <p className={activeParagraph === 0 ? "active" : "hidden"}>
                        To rent a car, choose a rental company, provide a valid driver’s license and payment method, 
                        and select a vehicle. Review the rental agreement, check the car for damage, 
                        and return it on time to avoid extra charges.
                    </p>
                </div>

                <div>
                    <h1 onClick={() => setActiveParagraph(activeParagraph === 1 ? null : 1)} 
                        className={activeParagraph === 1 ? "active" : ""}>
                        How do I return my rental car at the airport?
                    </h1>
                    <p className={activeParagraph === 1 ? "active" : "hidden"}>
                        To return your rental car at the airport, follow the signs to the rental car return area, park in the designated spot, 
                        and remove all your belongings. Check the car for damage, return the keys to the rental desk, and confirm 
                        the return with the staff.
                    </p>
                </div>

                <div>
                    <h1 onClick={() => setActiveParagraph(activeParagraph === 2 ? null : 2)} 
                        className={activeParagraph === 2 ? "active" : ""}>
                        What is Rental Cover and how does it work?
                    </h1>
                    <p className={activeParagraph === 2 ? "active" : "hidden"}>
                        Rental Cover is an insurance option that protects you from high costs if your rental car is damaged or stolen. 
                        It works by reimbursing you for expenses like repair fees or excess charges, often at a lower cost than buying coverage directly 
                        from the rental company.
                    </p>
                </div>

                <div>
                    <h1 onClick={() => setActiveParagraph(activeParagraph === 3 ? null : 3)} 
                        className={activeParagraph === 3 ? "active" : ""}>
                        What documents are needed to rent a car?
                    </h1>
                    <p className={activeParagraph === 3 ? "active" : "hidden"}>
                        A valid driver’s license, a credit or debit card, and sometimes an additional ID, like a passport, are required to rent a car.
                    </p>
                </div>

                <div>
                    <h1 onClick={() => setActiveParagraph(activeParagraph === 4 ? null : 4)} 
                        className={activeParagraph === 4 ? "active" : ""}>
                        Is there an age limit for renting a car?
                    </h1>
                    <p className={activeParagraph === 4 ? "active" : "hidden"}>
                        Most rental companies require drivers to be at least 21 years old, and additional fees may apply for drivers under 25.
                    </p>
                </div>

                <div>
                    <h1 onClick={() => setActiveParagraph(activeParagraph === 5 ? null : 5)} 
                        className={activeParagraph === 5 ? "active" : ""}>
                        What happens if the rental car is returned late?
                    </h1>
                    <p className={activeParagraph === 5 ? "active" : "hidden"}>
                        Returning a car late may result in extra charges, usually calculated as an additional 
                        day's rental fee or an hourly rate.
                    </p>
                </div>
            </div>

            <form className="sendQs" onSubmit={handleSubmit}>
                <div className="sendQs_label">
                    <h1 className="sendQs_label-title">Question?</h1>
                    <label htmlFor="sendQs_label-name"></label>
                    <input type="text" name="name" className="sendQs_label-name" placeholder="Enter your name: " required />

                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" placeholder="Enter your Email: " required />

                    <label htmlFor="message"></label>
                    <textarea rows="5" cols="20" name="message" id="message" placeholder="Ask a Question" required />

                    <button type="submit" className="sendQs_btn">Send Question</button>
                </div>
            </form>
        </div>
    );
}

export default FAQ;
