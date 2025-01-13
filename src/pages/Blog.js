import React from "react";
import image1 from "../images/image13.png";
import question from "./questions"; 

import './blog.css';
function Blog() {
    return (
        <div className="Blog">
           
            <img className="faq_img1" src={image1} />
            <h1 className="faq_title">Blog</h1>

         
            <div className="Blog-questions">
                {question.map((item) => (
                    <div key={item.id} className="blog-question">
                        
                        <img className="blog-img" src={item.imageURL} alt="Blog Question" />
                       
                        <p className="blog-descript">{item.descript}</p>
                        <p className="blog-date">{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
