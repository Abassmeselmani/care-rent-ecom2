import React, { useState } from "react";
import image1 from "../images/image13.png";
import question from "./questions"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Correctly import FontAwesomeIcon
import { faLink } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from "react-router-dom";
import page1 from "./pageb1blog";

import './blog.css';

function Blog() {

    const navigate = useNavigate();
    const [hover, setHover] = useState(false); 

    const handleHover = () => {
        setHover(true); 
    };

    const handleLeave = () => {
        setHover(false);
    };

    const handlepage1 = () => {
        navigate('/page1');

    }

    return (
        <div className="Blog">
            <img className="faq_img1" src={image1} alt="FAQ" />
            <h1 className="faq_title">Blog</h1>

            <div className="Blog-questions">
                {question.map((item) => (
                    <div key={item.id} className="blog-question">
                        
                        <img
                            className="blog-img"
                            src={item.imageURL}
                            alt="Blog Question"
                            onMouseEnter={handleHover} 
                            onMouseLeave={handleLeave} 
                            onClick={handlepage1}
                        />
                        {hover && <FontAwesomeIcon icon={faLink} className="chain-icon" />} 
                        <p className="blog-descript">{item.descript}</p>
                        <p className="blog-date">{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
