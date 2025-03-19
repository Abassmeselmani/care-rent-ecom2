import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import image1 from "../images/image13.png";
import question from "./questions"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faLink } from '@fortawesome/free-solid-svg-icons'; 
import './blog.css';





function Blog() {
    const [hoveredId, setHoveredId] = useState(null); 
    const navigate = useNavigate(); 

    const handleMouseEnter = (id) => {
        setHoveredId(id); 
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    const handleNavigation = (route) => {
        if (route) {
            navigate(route);
        }
    };

    return (
        <div className="Blog">
            <img className="faq_img1" src={image1} alt="FAQ" />
            <h1 className="faq_title">Blog</h1>

            <div className="Blog-questions">
                {question.map((item) => (
                    <div 
                        key={item.id} 
                        className="blog-question"
                        onClick={() => handleNavigation(item.route)} 
                        style={{ cursor: item.route ? "pointer" : "default" }} 
                    >
                        <div 
                            className="blog-img-container"
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img className="blog-img" src={item.imageURL} alt="Blog Question" />
                            {hoveredId === item.id && (  
                                <FontAwesomeIcon icon={faLink} className="chain-icon" />
                            )}
                        </div>
                        <p className="blog-descript">{item.descript}</p>
                        <p className="blog-date">{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
